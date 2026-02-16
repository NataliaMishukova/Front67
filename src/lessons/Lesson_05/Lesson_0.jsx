// import { useState } from "react";
// import { v4 } from "uuid";

import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_055() {
  const buttons = [
    { id: 0, name: "Burger" },
    { id: 1, name: "Fries" },
    { id: 2, name: "Cola" },
    { id: 3, name: "Salad" },
    { id: 4, name: "Ketchup" },
    { id: 5, name: "Eiscream" },
  ];

  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">
          {buttons.map(buttons => (
            //   <li key={buttons}>{buttons}</li>
            <div key={buttons.id} className="button_control">
              <Button  name={buttons.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
      </div>
    </div>
  );
}

export default Lesson_055;
