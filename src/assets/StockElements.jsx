import React from "react";
import SingleStock from "./SingleStock";
const stockArray = [
  {
    name: "Stock Name",
    price: 1212.1,
    rise: 8.9,
    companyName: "Company Name",
    id: 2,
  },
  {
    name: "Stock Name",
    price: 1212.1,
    rise: 8.9,
    companyName: "Company Name",
    id: 3,
  },
  {
    name: "Stock Name",
    price: 1212.1,
    rise: 8.9,
    companyName: "Company Name",
    id: 4,
  },
  {
    name: "Stock Name",
    price: 1212.1,
    rise: 8.9,
    companyName: "Company Name",
    id: 10,
  },
  {
    name: "Stock Name",
    price: 1212.1,
    rise: 8.9,
    companyName: "Company Name",
    id: 5,
  },
  {
    name: "Stock Name",
    price: 1212.1,
    rise: 8.9,
    companyName: "Company Name",
    id: 6,
  },
  {
    name: "Stock Name",
    price: 1212.1,
    rise: 8.9,
    companyName: "Company Name",
    id: 7,
  },
  {
    name: "Stock Name",
    price: 1212.1,
    rise: 8.9,
    companyName: "Company Name",
    id: 8,
  },
];
const StockElements = (props) => {
  const elements = stockArray.map((x) => (
    <SingleStock
      startView = {props.startView}
      stopView =  {props.stopView}
      handleCurrentStock = {props.handleCurrentStock}
      {...x}
      key = {x.id}
    />
  ));

  return <ul className="stockElements" >{elements}</ul>;
};

export default StockElements;
