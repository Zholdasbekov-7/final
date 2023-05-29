import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cityAPI } from '../api/models';

const initialState = {
  countries: [],
  country: {},
  cities: [],
  status: 'idle',
};

export const getCountries = createAsyncThunk('countries/get', async (name) => {
  const response = await cityAPI.countries(name);
  return response.data;
});
export const getCities = createAsyncThunk('city/get', async (country) => {
  const response = await cityAPI.city(country);
  return response.data;
});

export const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCountry: (state, action) => {
        state.country = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(getCountries.rejected, state => {
        state.status = 'failed';
      });
    builder.addCase(getCountries.pending, state => {
        state.status = 'loading';
      });
    builder.addCase(getCountries.fulfilled, (state, action) => {
        state.status = 'idle';
        state.countries = action.payload;
    });
    builder.addCase(getCities.rejected, state => {
        state.status = 'failed';
      });
    builder.addCase(getCities.pending, state => {
        state.status = 'loading';
      });
    builder.addCase(getCities.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cities = action.payload;
    });
  },
});

export const { setCountry } = citySlice.actions;

export default citySlice.reducer;