import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_Loading: false,
  news: [
    {
      id: 1,
      title: "This is a news",
      date: "20/08/2022",
      detail:
        "This is a news. It is about the up-coming events in the world...",
    },
    {
      id: 2,
      title: "This is a second news",
      date: "20/06/2022",
      detail:
        "This is a news. It is about the second up-coming events in the world...",
    },
  ],
};
const newsSlice = createSlice({
  name: "Bulletin",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default newsSlice.reducer;
