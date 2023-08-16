import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const apiKey = "9b1b1b48d26c4b7db81d0dd08785a1ff";
const homePageUrl = `https://newsapi.org/v2/everything?domains=wsj.com&language=en&apiKey=${apiKey}`;
const businessHeadLinesUrl = `https://newsapi.org/v2/top-headlines?country=us&language=en&category=business&apiKey=${apiKey}`;
const techCrunchHeadLinesUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&language=en&apiKey=${apiKey}`;

const initialState = {
  is_Loading: false,
  news: [],
  error: undefined,
};

export const fetchNews = createAsyncThunk("news/fetch", async () => {
  const response = await axios.get(homePageUrl);
  // console.log("DATA IS HERE: ", response);
  return response.data;
});

// export const searchArticles = createAsyncThunk("news/search", async (url) => {
//   const response = await axios.get(url);
//   return response.data;
// });

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    // Pending
    builder.addCase(fetchNews.pending, (state, action) => {
      state.loading = true;
      state.searchedNews = [];
    });
    // Fullfilled
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });

    // Rejected
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.payload;
    });

    // Business
    // Pending
    // builder.addCase(fetchBusinessNews.pending, (state, action) => {
    //   state.loading = true;
    //   state.searchedNews = [];
    // });

    // // Fullfilled
    // builder.addCase(fetchBusinessNews.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.news = action.payload;
    // });

    // // Rejected
    // builder.addCase(fetchBusinessNews.rejected, (state, action) => {
    //   state.loading = false;
    //   state.news = [];
    //   state.error = action.payload;
    // });

    // // Tech Crunch
    // // Pending
    // builder.addCase(fetchTechCrunhNews.pending, (state, action) => {
    //   state.loading = true;
    //   state.searchedNews = [];
    // });

    // // Fullfilled
    // builder.addCase(fetchTechCrunhNews.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.news = action.payload;
    // });

    // // Rejected
    // builder.addCase(fetchTechCrunhNews.rejected, (state, action) => {
    //   state.loading = false;
    //   state.news = [];
    //   state.error = action.payload;
    // });

    // Article Searching
    // Pending
    // builder.addCase(searchArticles.pending, (state, action) => {
    //   state.loading = true;
    // });

    // // Fullfilled
    // builder.addCase(searchArticles.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.searchedNews = [action.payload];
    // });

    // // Rejected
    // builder.addCase(searchArticles.rejected, (state, action) => {
    //   state.loading = false;
    //   state.searchedNews = [];
    //   state.error = action.payload;
    // });
  },
});

// Generate Reducer
const newsReducer = newsSlice.reducer;
export default newsReducer;

// export const getNews = createAsyncThunk("bulletin/getNews", async () => {
//   return axios
//     .get(
//       "https://newsapi.org/v2/everything?q=bitcoin&apiKey=9b1b1b48d26c4b7db81d0dd08785a1ff"
//     )
//     .then((response) => {
//       console.log(response);
//     });
// });
// const newsSlice = createSlice({
//   name: "bulletin",
//   initialState,
//   extraReducers: {
//     [getNews.pending]: (state, action) => {
//       state.is_Loading = true;
//     },
//     [getNews.fulfilled]: (state, action) => {
//       state.is_Loading = false;
//       console.log("payload", action.payload);
//       state.news = action.payload;
//     },
//     [getNews.rejected]: (state, action) => {
//       state.is_Loading = false;
//       state.news = [];
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// // export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// // export const { fetchNews } = newsSlice.actions;
// export default newsSlice.reducer;
