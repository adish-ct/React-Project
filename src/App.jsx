import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import ExpenseTrackerPage from "./page/ExpenseTrackerPage";
import HomePage from "./page/HomePage";


function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/expense-track" element={<ExpenseTrackerPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
