import { useState } from "react";
import "./styles.css";

const hobbiesDictionary = {
  Travel: ["New York", "Paris", "London"],
  Food: ["Dosa", "Shahi paneer"],
  Music: ["English", "Hindi"]
};

var arrayOfObjects = Object.keys(hobbiesDictionary);
export default function App() {
  const [meaning, setMeaning] = useState([]);
  function objectClickHandler(item) {
    // console.log(item)
    var meaning = hobbiesDictionary[item];
    setMeaning(meaning);
    // console.log(meaning);
  }

  return (
    <div className="App">
      <h1>🚗Travel 🍔Food 🎵Music</h1>
      <h2>See the recommendations for 🚗Travel 🍔Food and 🎵Music</h2>
      <hr />
      <span>
        {arrayOfObjects.map(function (item, i) {
          return (
            <button
              key={i}
              style={{
                margin: "1rem",
                fontSize: "larger",
                borderRadius: "0.5rem"
              }}
              onClick={() => objectClickHandler(item)}
            >
              {item}
            </button>
          );
        })}
      </span>

      <div>
        {meaning?.map(function (item) {
          return (
            <li
              key={item}
              style={{
                fontSize: "2rem",
                color: "green",
                borderColor: "blue",
                border: "1px solid "
              }}
            >
              {item}
            </li>
          );
        })}
      </div>
      {/* <li>{meaning}</li> */}
    </div>
  );
}
