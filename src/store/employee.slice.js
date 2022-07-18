import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "organization",
  initialState: {
    error: "",
    employeeList: [
      {
        name: "Ravi",
        email: "ravi@gmail.com",
        mobile: "9848032919",
        designation: "ASE"
      },
      {
        name: "Ramesh",
        email: "ramesh@gmail.com",
        mobile: "9848022338",
        designation: "Team Lead"
      },
      {
        name: "Rahul",
        email: "rahul@gmail.com",
        mobile: "9192939495",
        designation: "Manager"
      }
    ]
  },
  reducers: {
    updateEmployeeList: (state, action) => {
      let index = state.employeeList.findIndex(e => e.name === action.payload.name);
      if (index === -1) {
        state.employeeList.push(action.payload);
      }
    },
  },
});

export const {
  updateEmployeeList
} = employeeSlice.actions;

export const addEmployeeToList = (employee) => async (dispatch) => {
  dispatch(updateEmployeeList(employee));
};

export const employeeList = state => state.organization.employeeList;

export default employeeSlice.reducer;
