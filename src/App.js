import "./App.css";
import Navbar from "./components/Navbar";
import Travel from "./components/Travel";
import data from "../src/data";

function App() {
  const travels = data.map((item) => {
    return <Travel key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section className="travels-list">{travels}</section>
    </div>
  );
}

export default App;
