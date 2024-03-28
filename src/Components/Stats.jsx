import { MoreHorizTwoTone } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import StatsRow from "./StatsRow";

import { DataBase } from "./firebase";

import "./Stats.css";
import { collection, getDocs } from "firebase/firestore";

const Api_Key = "co23g11r01qvggedqsggco23g11r01qvggedqsh0";

function Stats() {
  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = async () => {
    const querySnapshot = await getDocs(collection(DataBase, "myStocks"));
    let promises = [];
    let tempData = [];
    querySnapshot.forEach((doc) => {
      promises.push(
        getStocksData(doc.data().ticker).then((res) => {
          tempData.push({
            id: doc.id,
            data: doc.data(),
            info: res,
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setMyStocks(tempData);
    });
  };

  const api = axios.create({
    baseURL: "https://finnhub.io/api/v1",
  });

  api.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getStocksData = async (stock) => {
    try {
      const response = await api.get(`/quote?symbol=${stock}&token=${Api_Key}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      throw error;
    }
  };

  useEffect(() => {
    const tempData = [];
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
    ];

    getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          tempData.push({
            name: stock,
            ...res,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setStocksData(tempData);
    });
  }, []);
  return (
    <>
      <div className="stats">
        <div className="stats__container">
          <div className="stats__header">
            <p> Stocks</p>
            <MoreHorizTwoTone />
          </div>
          <div className="stats__content">
            <div className="stats__rows">
              {myStocks.map((stock) => (
                <StatsRow
                  key={stock.data.ticker}
                  name={stock.data.ticker}
                  openPrice={stock.info.o}
                  shares={stock.data.shares}
                  price={stock.info.c}
                />
              ))}
            </div>
          </div>
          <div className="stats__header stats-lists">
            <p>Lists</p>
          </div>
          <div className="stats__content">
            <div className="stats__rows">
              {stocksData.map((stock, index) => (
                <StatsRow
                  key={index}
                  name={stock?.name}
                  openPrice={stock?.o}
                  price={stock?.pc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
