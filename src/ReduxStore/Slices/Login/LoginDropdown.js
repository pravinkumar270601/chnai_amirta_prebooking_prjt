/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

const TIMESHEETDROPDOWN = createAsyncThunk(
  "TimeSheetDropdown/TimeSheetDropdown",
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

const TimeSheetDropdownSlice = createSlice({
  name: "TimeSheetDropdownSlice",
  initialState: {
    TimeSheetDropdown: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(TIMESHEETDROPDOWN.fulfilled, (state, action) => {
      state.TimeSheetDropdown = {
        ...state.TimeSheetDropdown,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(TIMESHEETDROPDOWN.pending, (state, action) => {
      state.TimeSheetDropdown = {
        ...state.TimeSheetDropdown,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(TIMESHEETDROPDOWN.rejected, (state, action) => {
      state.TimeSheetDropdown = {
        ...state.TimeSheetDropdown,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
}); 

const TimeSheetDropdownAction = {
    TIMESHEETDROPDOWN,
};

export { TimeSheetDropdownAction };
export default TimeSheetDropdownSlice.reducer;
