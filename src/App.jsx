import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import ExpenseTrackerPage from "./page/ExpenseTrackerPage";
import HomePage from "./page/HomePage";
import CountPage from "./page/CountPage";


function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expense-track" element={<ExpenseTrackerPage />} />
          <Route path="/count-section" element={<CountPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
