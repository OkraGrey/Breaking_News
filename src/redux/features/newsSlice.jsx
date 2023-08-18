import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const apiKey = "9b1b1b48d26c4b7db81d0dd08785a1ff";
const homePageUrl = `https://newsapi.org/v2/everything?domains=wsj.com&language=en&apiKey=${apiKey}`;
const businessHeadLinesUrl = `https://newsapi.org/v2/top-headlines?country=us&language=en&category=business&apiKey=${apiKey}`;
const techCrunchHeadLinesUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&language=en&apiKey=${apiKey}`;

const initialState = {
  is_loading: false,
  news: [],
  searchedNews: [],
  error: undefined,
};

export const fetchNews = createAsyncThunk("news/fetch", async () => {
  const response = await axios.get(homePageUrl);
  // console.log("DATA IS HERE: ", response);
  return response.data;
});

export const searchArticles = createAsyncThunk("news/search", async (url) => {
  const response = await axios.get(url);
  // console.log(response);
  return response.data;
});

// Action for business page
export const fetchBusinessNews = createAsyncThunk(
  "news/fetchBusiness",
  async () => {
    const response = await axios.get(businessHeadLinesUrl);
    return response.data;
  }
);

export const fetchTech = createAsyncThunk("news/fetchTech", async () => {
  const response = await axios.get(techCrunchHeadLinesUrl);
  return response.data;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    // Pending
    builder.addCase(fetchNews.pending, (state, action) => {
      state.is_loading = true;
      state.searchedNews = [];
    });
    // Fullfilled
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.is_loading = false;
      state.news = action.payload;
    });

    // Rejected
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.is_loading = false;
      state.news = [];
      state.error = action.payload;
    });

    // Business;
    // Pending;
    builder.addCase(fetchBusinessNews.pending, (state, action) => {
      state.is_loading = true;
      state.searchedNews = [];
    });

    // Fullfilled
    builder.addCase(fetchBusinessNews.fulfilled, (state, action) => {
      state.is_loading = false;
      state.news = action.payload;
    });

    // Rejected
    builder.addCase(fetchBusinessNews.rejected, (state, action) => {
      state.is_loading = false;
      state.news = [];
      state.error = action.payload;
    });

    // Tech Crunch
    // Pending
    builder.addCase(fetchTech.pending, (state, action) => {
      state.is_loading = true;
      state.searchedNews = [];
    });

    // Fullfilled
    builder.addCase(fetchTech.fulfilled, (state, action) => {
      state.is_loading = false;
      state.news = action.payload;
    });

    // Rejected
    builder.addCase(fetchTech.rejected, (state, action) => {
      state.is_loading = false;
      state.news = [];
      state.error = action.payload;
    });

    // Article Searching
    // Pending
    builder.addCase(searchArticles.pending, (state, action) => {
      state.is_loading = true;
    });

    // Fullfilled
    builder.addCase(searchArticles.fulfilled, (state, action) => {
      // console.log("search Fullfilled");
      state.is_loading = false;
      state.searchedNews = [action.payload];
      // console.log(state.searchedNews);
    });

    // Rejected
    builder.addCase(searchArticles.rejected, (state, action) => {
      // console.log("search rejected");

      state.is_loading = false;
      state.searchedNews = [];
      state.error = action.payload;
    });
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
//       state.is_is_loading = true;
//     },
//     [getNews.fulfilled]: (state, action) => {
//       state.is_is_loading = false;
//       console.log("payload", action.payload);
//       state.news = action.payload;
//     },
//     [getNews.rejected]: (state, action) => {
//       state.is_is_loading = false;
//       state.news = [];
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// // export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// // export const { fetchNews } = newsSlice.actions;
// export default newsSlice.reducer;
