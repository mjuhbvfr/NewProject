import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employee.slice';

export default configureStore({
    reducer: {
        organization: employeeReducer
    },
  })