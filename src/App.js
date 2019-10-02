import React from "react";

import { CoinContainer } from "./containers/CoinContainer";
import Navbar from "./components/Navbar";
import "./styles.scss";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CoinContainer />
    </div>
  );
};
