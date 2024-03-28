import React from "react";
import { DataBase } from "./firebase";

import StockChart from "./images/stock.svg";
import "./Stats.css";
import { collection, where, getDocs } from "firebase/firestore";

function StatsRow(props) {
  //   console.log(props, "what is in props here?");
  // (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

  const getModal = async () => {
    // const myStocksRefs = collection(DataBase, "myStocks");
    // const querySnapshot = await getDocs(
    //   myStocksRefs,
    //   where("ticker", "==", props.name)
    // ).then((model) => {
    //   if (model && model.exists) {
    //     model.forEach((doc) => {
    //       console.log(doc.data(), "=>", doc.id);
    //     });
    //   } else {
    //     console.log("No such document!");
    //   }
    // });
    // return querySnapshot;
  };
  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.shares && props.shares + " shares"}</p>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16} />
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
