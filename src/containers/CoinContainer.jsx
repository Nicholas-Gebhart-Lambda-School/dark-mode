import React, { useEffect, useState } from "react";
import { getCoinData } from "../services/cgApi";

import Chart from "../components/Chart";

export const CoinContainer = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    getCoinData().then(data => data && setCoinData(data));
  }, []);

  return (
    <div className="charts">
      {coinData.length > 0 ? (
        coinData.map(coin => (
          <div className="chart__container" key={coin.name}>
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
            s<Chart sparklineData={coin.sparkline_in_7d.price} />
          </div>
        ))
      ) : (
        <h1 style={{ marginTop: "25%" }}>Loading...</h1>
      )}
    </div>
  );
};
