import { useState } from "react";
import "./styles.css";

const hobbiesDictionary = {
  Travel: [
    {
      name: "New York",
      rating: "4/5",
      description:
        "New York has to be one of the most famous cities in the world"
    },
    { name: "Paris", rating: "3/5", description: "Most Beautiful city" },
    {
      name: "London",
      rating: "4/5",
      description: "Beautiful and has a big contribution in finance world"
    }
  ],

  Food: [
    {
      name: "Dosa",
      rating: "5/5",
      description: "Healthy and most famous south Indian food"
    },
    {
      name: "Shahi Paneer",
      rating: "3/5",
      description:
        "Provides nutrition to body. This has milk product that is paneer"
    },
    {
      name: "Dal Makhni",
      rating: "2/5",
      description:
        "This also a great food to eat. Time requierd to make this dish is very less"
    }
  ],

  Music: [
    {
      name: "English",
      rating: "5/5",
      description:
        "This is internaltional language. Everyone should know how to speak and write in english"
    },
    {
      name: "Hindi",
      rating: "5/5",
      description:
        "Hindi, is an Indo-Aryan language spoken chiefly in North India."
    },
    {
      name: "French",
      rating: "4/5",
      description:
        "This is mostly used in Canada. If you know this language then it will be easy you to move to canada"
    }
  ]
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
                fontSize: "large",
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
              key={item.name}
              style={{
                textAlign: "left",
                listStyle: "none",
                fontSize: "2rem",
                color: "green",
                borderColor: "blue",
                border: "1px solid ",
                maxWidth: "600px",
                margin: "auto",
                padding: "0.5rem"
              }}
            >
              {/* {item} */}
              <div style={{ fontSize: "larger" }}> name :{item.name} </div>
              <div style={{ fontSize: "smaller" }}> rating: {item.rating} </div>
              <small style={{ fontSize: "smaller" }}>
                {" "}
                description: {item.description}{" "}
              </small>
            </li>
          );
        })}
      </div>
      {/* <li>{meaning}</li> */}
    </div>
  );
}
