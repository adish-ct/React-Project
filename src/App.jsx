import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavSideBars/Navbar";
import SideBar from "./components/NavSideBars/SideBar";

import ExpenseTrackerPage from "./page/ExpenseTrackerPage";


function App() {

  return (
    <>
      <div className="App">
      

        <Navbar />

      </div>
    </>
  );
}

export default App;
