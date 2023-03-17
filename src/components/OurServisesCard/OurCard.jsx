import React from 'react';
import "./OurCard.scss"

const OurCard = ({ cardImg, cardTitle, cardDesc }) => {
    return (
      <div className="CardServises">
        <div className="CardServises__Img">
          <img src={cardImg} alt="img" />
        </div>
        <div className="CardServises__Body">
          <h3>{cardTitle}</h3>
          <p>{cardDesc}</p>
        </div>
      </div>
    );
};

export default OurCard;