


import { BranchDropdownAction } from "../Slices/Login/BranchDropDown";
import { LoginCreateAction } from "../Slices/Login/LoginCreate";
import { TimeSheetDropdownAction } from "../Slices/Login/LoginDropdown";
import { MovieCreateAction } from "../Slices/Login/MovieCreate";





const actions = {


  ...LoginCreateAction,
  ...TimeSheetDropdownAction,
  ...BranchDropdownAction,
  ...MovieCreateAction,
  

};

export default actions;
