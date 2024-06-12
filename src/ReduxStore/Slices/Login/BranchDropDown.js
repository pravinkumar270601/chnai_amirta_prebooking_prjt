/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

const BRANCHDROPDOWN = createAsyncThunk(
  "BranchDropdown/BranchDropdown",
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

const BranchDropdownSlice = createSlice({
  name: "BranchDropdownSlice",
  initialState: {
    BranchDropdown: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(BRANCHDROPDOWN.fulfilled, (state, action) => {
      state.BranchDropdown = {
        ...state.BranchDropdown,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(BRANCHDROPDOWN.pending, (state, action) => {
      state.BranchDropdown = {
        ...state.BranchDropdown,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(BRANCHDROPDOWN.rejected, (state, action) => {
      state.BranchDropdown = {
        ...state.BranchDropdown,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
}); 

const BranchDropdownAction = {
    BRANCHDROPDOWN,
};

export { BranchDropdownAction };
export default BranchDropdownSlice.reducer;
