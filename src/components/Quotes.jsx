import React from "react";
import styles from './Quotes.module.css';

function Quotes(){

    return(
        <div className={styles["quote-container"]} >
            <h3>The quote goes here and it keeps going</h3>
            <button>New Quote!</button>
        </div>
    );
};

export default Quotes;