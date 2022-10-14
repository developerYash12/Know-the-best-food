import React, { useState } from "react";
import "./styles.css";

const foodItemListDb = {
  Italian: [
    { name: " Margherita Pizza", rating: "4.5/5" },
    { name: "Pasta Con Pomodoro E Basilico", rating: "4/5" },
    { name: "Mushroom Risotto", rating: "4.4/5" }
  ],

  Chinese: [
    {
      name: "Quick Noodles",
      rating: "5/5"
    },
    {
      name: "Honey Chilli Potato",
      rating: "4.5/5"
    },
    {
      name: "Szechwan Chilli Chicken",
      rating: "4.2/5"
    }
  ],
  NorthIndian: [
    {
      name: "Lacha Paratha (Layered Bread)",
      rating: "4.5/5"
    },
    {
      name: "Mutter Paneer (Indian Peas and Cottage Cheese Curry)",
      rating: "5/5"
    },
    {
      name: "Chole Bhature)",
      rating: "4.8/5"
    }
  ],
  SouthIndian: [
    {
      name: "Masala Dosa",
      rating: "4.5/5"
    },
    {
      name: "Hyderabadi Biryani",
      rating: "5/5"
    },
    {
      name: "Coconut Rice",
      rating: "4.2/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Italian");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Know The Best Food 🍔</h1>
      <p> Checkout my favorite Food. Select a genre to get started </p>
      <div>
        {Object.keys(foodItemListDb).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {foodItemListDb[selectedGenre].map((dish) => (
            <li key={dish.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {dish.name} </div>
              <div style={{ fontSize: "0.9rem", margin: "0.5rem" }}>
                Rating - {dish.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}