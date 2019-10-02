import axios from "axios";

export const getCoinData = async () => {
  const result = await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
    )
    .then(({ data }) => data)
    .catch(err => console.error("error", err));

  return result;
};
