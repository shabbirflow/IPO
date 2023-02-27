import React from "react";
import icon from "../../public/icon.png";
import graph from '../../public/graph.jpg';
const StockView = (props) => {
  console.log(props);
  return (
    <div onClick={props.stopView} className="view-div">
      <div className="iconAndTitle">
        <img src={icon} className="viewIcon" />
        <div className="titleAndCompany">
          <h3 className="stockName">{props.stock.name}</h3>
          <p className="companyName">{props.stock.companyName}</p>
        </div>
      </div>
      <div className="about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam earum dolores? Cumque animi modi, consequatur est, nam repellendus, tenetur vel placeat optio ipsa odit hic cum possimus voluptates necessitatibus!</p>
        </div>
        <img src = {graph} className = 'graph' />
    </div>
  );
};

export default StockView;
