import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import LoginCreateSlice from "../Slices/Login/LoginCreate";
import  TimeSheetDropdownSlice from "../Slices/Login/LoginDropdown";
import BranchDropdownSlice from "../Slices/Login/BranchDropDown";
import MovieCreateSlice from '../Slices/Login/MovieCreate'





const reducer = combineReducers({
  LoginCreate:LoginCreateSlice,
 TimeSheetDropdown:TimeSheetDropdownSlice,
 BranchDropdown:BranchDropdownSlice,
 MovieCreate: MovieCreateSlice,





});

const store = configureStore({
  reducer,
});
export default store;
