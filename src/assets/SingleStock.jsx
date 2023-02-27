import React from "react";
import icon from "../../public/icon.png";
import riseIcon from '../../public/rise.png'
const SingleStock = (props) => {
  const handleStart = () => {
    props.handleCurrentStock({
      ...props
    })
    props.startView();
  }
  // console.log("I RAN")
  // console.log(props)
  return (
    <div className="single-stock" onClick={handleStart}>
      <div className="imgAndTitle">
        <img src={icon} className = 'logo' />
        <div className="titleAndCompany">
          <h3 className="stockName">{props.name}</h3>
          <p className="companyName">{props.companyName}</p>
        </div>
      </div>
      <div className="priceAndRise">
        <span className= 'price'>${props.price}</span>
        <span className="rise">
          <img src = {riseIcon} className= 'riseIcon' />
          {props.rise} %
        </span>
      </div>
    </div>
  );
};

export default SingleStock;
