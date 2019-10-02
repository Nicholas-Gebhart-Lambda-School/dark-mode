import React, { useEffect, useState } from "react";
import { getCoinData } from "../services/cgApi";

import Chart from "../components/Chart";

export const CoinContainer = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    getCoinData().then(data => setCoinData(data));
  }, []);

  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
