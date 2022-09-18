import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import data from "../../assets/data";
import Card from "../Card/Card";
import "./styles/App.css";

function App(props) {
  let counter = 0;
  const [appData, setAppdata] = useState(data);

  function handleClick(e) {
    const userName = e.target.closest(".card").dataset.key;
    const newData = appData.map((item) => {
      if (item.user == userName) {
        return { ...item, isUnread: false };
      }
      return item;
    });
    setAppdata(newData);
  }

  function handleReset() {
    const newAppData = appData.map((item) => {
      counter = 0;
      return { ...item, isUnread: false };
    });
    setAppdata(newAppData);
  }

  const cards = appData.map((item) => {
    if (item.isUnread) counter++;
    return <Card {...item} handleClick={handleClick} key={item.user} />;
  });
  return (
    <div className="body">
      <main>
        <header>
          Notification
          <span className="counter">{counter}</span>
          <button onClick={handleReset}>Mark all as read</button>
        </header>
        {cards}
      </main>
    </div>
  );
}

export default App;
