
import Header from "./component/Header";
import "./App.css";
import "./lib/fontawesome/css/all.min.css"
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Watchlist from "./component/Watchlist";
import Watched from "./component/Wacthed";
import Add from "./component/Add";



function App() {
  return (
  <Router>
    <Header/>

    <Routes>
      <Route path="/" element={<Watchlist/>}/>
      <Route path="/watched" element={<Watched />} />
      <Route path="/add" element={<Add/>}/>
    </Routes>
  </Router>
  )
}

export default App
