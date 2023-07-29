import React, { useEffect } from "react";
import styles from './Quotes.module.css';

function Quotes(){

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then((response) => {
            if(!response.ok){
                throw new Error("Something went wrong");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error)
        });
    }, []);

    return(
        <div className={styles["quote-container"]} >
            <h3>The quote goes here and it keeps going</h3>
            <button>New Quote!</button>
        </div>
    );
};

export default Quotes;