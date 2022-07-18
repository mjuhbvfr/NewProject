import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Home from './components/Home';
import GlobalStyle, { Row, Section, Text } from './globalStyles';





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element ={<Home />}/>
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/employeeList" element={<EmployeeList/>} />
  {/* <Route path="/about" /> */}
      </Routes>
    </Router>
  );
}

export default App;
