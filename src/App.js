import React, { useState } from "react";
import "./styles.css";

const foodDB = {
  italian: [
    { name: "Ravioli", place: "Churrolto, Hyderabad" },
    { name: "Chesse burst pizza", place: "Dominos" },
    { name: "Pasta", place: "Spaghetti Monster, Hyderabad" },
    {
      name: "Spaghetti aglio e olio",
      place: "Roastery Coffee House, Hyderabad"
    }
  ],
  hyderabadi: [
    { name: "Biryani", place: "Paradise" },
    { name: "Double ka Meetha", place: "Chicha's" },
    { name: "Biscuits", place: "Karachi Bakery, Hyderabad" }
  ],
  punjabi: [
    { name: "Dal Makhani", place: "Punjabi Affair, Hyderabad" },
    { name: "Paratha", place: "Parathas & More, Hyderabad" }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("italian");

  function categoryClickHandler(foodItem) {
    setCategory(foodItem);
  }

  return (
    <div className="App">
      <h1>did someone say f🍝🍛d?</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favourite food items. Select a category of your choice
      </p>
      <div>
        {Object.keys(foodDB).map((foodCategory) => (
          <button
            onClick={() => categoryClickHandler(foodCategory)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {foodCategory}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedCategory].map((foodItem) => (
            <li
              key={foodItem.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {foodItem.name} </div>
              <div style={{ fontSize: "smaller" }}> @{foodItem.place} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
