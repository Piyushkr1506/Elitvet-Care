import logo from "./logo.svg";
import "./App.css";
import LoginSignup from "./Components/Assets/LoginSignup";
import Dashboard from "./Components/DashBoard/DashBoard";
import { About } from "./Components/DashBoard/About";
import Navbar from "./Components/DashBoard/Navbar";
import ServiceTable from "./Components/DashBoard/ServiceTable";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";

function App() {
  
  return (
    <div >
     
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<ServiceTable />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<LoginSignup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
