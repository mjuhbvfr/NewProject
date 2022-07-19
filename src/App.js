import "./App.css";
import GlobalStyle, { Row, Section, Text } from './globalStyles';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, {Suspense} from "react";
const Navbar = React.lazy(() => import('./components/Navbar'));
const AddEmployee = React.lazy(() => import('./components/AddEmployee'));
const EmployeeList = React.lazy(() => import('./components/EmployeeList'));
const Home = React.lazy(() => import('./components/Home'));





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element ={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }/>
        <Route path="/addEmployee" element={
          <Suspense fallback={<div>Loading...</div>}>
            <AddEmployee />
          </Suspense>
        }/>
        <Route path="/employeeList" element={
          <Suspense fallback={<div>Loading...</div>}>
            <EmployeeList />
          </Suspense>
        }/>
  {/* <Route path="/about" /> */}
      </Routes>
    </Router>
  );
}

export default App;
