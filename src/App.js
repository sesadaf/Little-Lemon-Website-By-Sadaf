
import './App.css';
import "react-bootstrap/dist/react-bootstrap.min.js"
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home";
import Bookings from "./routes/Bookings";



function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/Bookings" element = {<Bookings />}/>
      </Routes>
    </>
  );
}
export default App;
