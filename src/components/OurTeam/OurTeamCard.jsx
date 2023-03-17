import React from 'react';

const OurTeamCard = ({ CardImg, CardTitle, CardDesc }) => {
  return (
    <div className="OurTeamCard">
      <div className="OurTeamCard__img">
        <img src={CardImg} alt="" className='w-100'/>
      </div>
      <div className="OurTeamCard__body">
        <h4>{CardTitle}</h4>
        <span className="OurTeamCard__body_line"></span>
        <p>{CardDesc}</p>
      </div>
    </div>
  );
};

export default OurTeamCard;