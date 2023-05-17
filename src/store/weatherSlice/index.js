const { createSlice } = require("@reduxjs/toolkit");

export const weatherSlice = createSlice({
  name: "weatherData",
  initialState: {
    weatherData: "",
  },
  reducers: {
    addWeatherData(state, action) {
      state.weatherData = action.payload;
    },
  },
});

export const { addWeatherData } = weatherSlice.actions;

export const selectWeatherData = (state) => state.weatherData.weatherData;


export default weatherSlice.reducer;