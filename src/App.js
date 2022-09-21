import { Expenses } from "./components/molecules";

function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(2022, 9, 20),
      item: "Seblak Bakar",
      price: 20000,
    },
    {
      id: 2,
      date: new Date(2022, 6, 12),
      item: "Buku",
      price: 750000,
    },
    {
      id: 3,
      date: new Date(2021, 2, 10),
      item: "Hadiah Ulang Tahun",
      price: 300000,
    },
    {
      id: 4,
      date: new Date(2020, 12, 1),
      item: "Service Motor",
      price: 20000,
    },
    {
      id: 5,
      date: new Date(2022, 4, 11),
      item: "Smart TV",
      price: 20000,
    },
  ];

  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Expense Tracker</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
