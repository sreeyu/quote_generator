import React from "react";
import styles from './App.module.css';
import Image from './image.jpg';
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles["header-image"]} >
        <img src={Image} alt="" />
        <h4>Quotes Generator</h4>
      </div>
      <Quotes />
    </div>
  );
}

export default App;
