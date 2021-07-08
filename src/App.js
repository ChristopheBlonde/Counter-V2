import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStopwatch,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch, faPlus, faMinus);

function App() {
  const [addCounter, setAddCounter] = useState([0]);

  const handleAddCounter = () => {
    const newTab = [...addCounter];
    if (addCounter.length <= 2) {
      newTab.push(0);
    }
    setAddCounter(newTab);
  };
  return (
    <div>
      <Header />
      {addCounter.length < 3 && (
        <button onClick={handleAddCounter} className="buttonAdd">
          Add counter
        </button>
      )}

      <div className="content">
        {addCounter.map((item, index) => {
          return <Counter key={index} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
