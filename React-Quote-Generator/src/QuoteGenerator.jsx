import React, { useState } from 'react';
import './index.css'; 

const quotes = [
  "Waste no more time arguing what a good man should be. Be One.",
  "If it is not right, do not do it; if it is not true, do not say it.",
  "The best revenge is not to be like your enemy.",
  "Be tolerant with others and strict with yourself.",
  "He who fears death will never do anything worthy of a man who is alive.",
  "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
  "Don’t explain your philosophy. Embody it."
];

const colors = [
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bfbc0",
  "#a0e7e5",
  "#b9fbc0"
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [lastQuoteIndex, setLastQuoteIndex] = useState(-1);
  const [bgColor, setBgColor] = useState("#f9f9f9");

  const generateQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);
    
    setLastQuoteIndex(randomIndex);
    setQuote(quotes[randomIndex]);
    
    // Change background color randomly
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    setBgColor(colors[randomColorIndex]);
  };

  return (
    <div className="quote-generator-container">
      <h1>Motivational Quote Generator</h1>
      <div className="quote-display" style={{ backgroundColor: bgColor }}>
        <p>{quote || "Click the button for a motivational quote!"}</p>
      </div>
      <button onClick={generateQuote}>Generate Quote</button>
    </div>
  );
};

export default QuoteGenerator;
