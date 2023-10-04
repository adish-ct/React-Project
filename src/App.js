import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <>
      <div className="App">
        <h1>Test Project</h1>
        <ExpenseTracker />
        <ExpenseItem />
      </div>
    </>
  );
}

export default App;
