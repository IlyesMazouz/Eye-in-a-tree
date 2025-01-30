// Title component displays a special title each time called
import React from 'react'
import '../styles/Title.css'

const Title = ({ text1, text2 }) => {
  return (
    <div className="title-container">
      <p className="title-text">
        {text1} <span className="title-highlight">{text2}</span>
      </p>
      <p className="title-separator"></p>
    </div>
  );
};

export default Title;
