import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ExpenseTrackerPage from "./page/ExpenseTrackerPage";
import HomePage from "./page/HomePage";
import CountPage from "./page/CountPage";
import InputFormPage from "./page/InputFormPage";
import { useState } from "react";


function App() {

  let [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    counter = counter + 1
    setCounter(counter)
  }

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expense-track" element={<ExpenseTrackerPage />} />
          <Route path="/count-section" element={<CountPage />} />
          <Route path="/user-form" element={<InputFormPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
