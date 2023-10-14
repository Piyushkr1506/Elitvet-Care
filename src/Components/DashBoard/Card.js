import React from 'react';
import './Card.css'; 




const Card = ({ title, content ,imgSrc }) => {
  return (
    <div className="card">
      <h2 className="card-title"  style={{color:"grey",fontSize:"20px",borderBottom:"1px solid",paddingBottom:"10px"}}>{title}</h2>
      <div style={{display:"flex"}}>
      <p className="card-title" style={{fontWeight:"500"}}>{content}</p>
      <img src={imgSrc} alt="dog" height={"90px"} className='Img_for_card' />
      </div>
    </div>
  );
}

export default Card;
