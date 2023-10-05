import "./App.css";
import ExpenseComponent from "./components/ExpenseComponent";
import ExpenseDate from "./components/ExpenseDate";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseTrackHead from "./components/ExpenseTrackHead";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  const expenseData = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 238.34,
      date: new Date(2023, 2, 23),
    },
    {
      id: "e2",
      title: "Bike Insurance",
      amount: 287.34,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 238.34,
      date: new Date(2023, 2, 23),
    },
  ];
  return (
    <>
      <div className="App">
        <ExpenseTracker />
        <ExpenseTrackHead />
        <ExpenseComponent items={expenseData} />
      </div>
    </>
  );
}

export default App;
