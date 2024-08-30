import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchTrucksList = createAsyncThunk(
  'trucks/fetchTrucksList',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get('/campers', {
        params: { page, limit },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchTruckById = createAsyncThunk(
  'trucks/fetchTruckById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
