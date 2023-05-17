const { createSlice } = require("@reduxjs/toolkit");

export const HistorySlice = createSlice({
  name: "searchHistory",
  initialState: {
    searchHistory: [],
  },
  reducers: {
    addsearchHistory(state, action) {
      state.searchHistory.push(action.payload);
    },
  },
});

export const { addsearchHistory } = HistorySlice.actions;

export const selectsearchHistory = (state) => state.searchHistory.searchHistory;

export default HistorySlice.reducer;
