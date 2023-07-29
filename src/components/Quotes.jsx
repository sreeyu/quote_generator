import React, { useEffect, useState } from "react";
import styles from './Quotes.module.css';

function Quotes(){

    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState("");
    
    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then((response) => {
            if(!response.ok){
                throw new Error("Something went wrong");
            }
            return response.json();
        })
        .then((data) => {
            setQuotes(data);
            setQuote(data[0]);
        })
        .catch((error) => {
            console.log(error)
        });
    }, []);
    
    const getQuote = () => {
        let random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random]);
    };

    const author = quote.author?.includes('type.fit') ? quote.author?.substring(0, quote.author.indexOf(",") || quote.author.length) : quote?.author;

    return(
        <div className={styles["quote-container"]} >
            <h3>{quote.text}</h3>
            <i>-{author}</i>
            <button onClick={getQuote} >New Quote!</button>
        </div>
    );
};

export default Quotes;