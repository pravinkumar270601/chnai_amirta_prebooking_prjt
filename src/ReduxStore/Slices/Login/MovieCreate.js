/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

const MOVIECREATE = createAsyncThunk(
  "MovieCreate/MovieCreate",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const MovieCreateSlice = createSlice({
  name: "MovieCreateSlice",
  initialState: {
    MovieCreate: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(MOVIECREATE.fulfilled, (state, action) => {
      state.MovieCreate = {
        ...state.MovieCreate,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(MOVIECREATE.pending, (state, action) => {
      state.MovieCreate = {
        ...state.MovieCreate,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(MOVIECREATE.rejected, (state, action) => {
      state.MovieCreate = {
        ...state.MovieCreate,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const MovieCreateAction = {
    MOVIECREATE,
};

export { MovieCreateAction };
export default MovieCreateSlice.reducer;
