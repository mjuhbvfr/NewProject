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

// export const getPaymentMethods = () => async (dispatch) => {
//   const res = await getAvailablePaymentMethods(process.env.REACT_APP_HOTEL_ID);
//   dispatch(paymentMethods([res.data, res.status]));
// };

// export const initiatePayment = (data, bookingReference) => async (dispatch) => {
//   const res = await initiateHoldAmoutPayment(process.env.REACT_APP_HOTEL_ID, bookingReference, data);
//   dispatch(payments([res.data, res.status]));
// };

// export const submitAdditionalDetails = (data, orderRef) => async (dispatch) => {
//   const response = await fetch(`http://localhost:8080/api/submitAdditionalDetails?orderRef=${orderRef}`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   dispatch(paymentDetails([await response.json(), response.status]));
// };

// export const getPaymentDataStore = () => async (dispatch) => {
//   const response = await fetch("http://localhost:8080/api/getPaymentDataStore");
//   dispatch(paymentDataStore([await response.json(), response.status]));
// };

// export const cancelOrRefundPayment = (orderRef) => async (dispatch) => {
//   await fetch(`http://localhost:8080/api/cancelOrRefundPayment?orderRef=${orderRef}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   dispatch(getPaymentDataStore());
// };

export const employeeList = state => state.organization.employeeList;

export default employeeSlice.reducer;
