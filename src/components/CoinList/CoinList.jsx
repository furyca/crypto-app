// eslint-disable-next-line
import style from "./CoinList.module.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import Coin from "../Coin/Coin";

const CoinList = () => {
  const context = useContext(Context);
  const [result, setResult] = useState([])

  useEffect(() => {
    const getCoins = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      context.setData(response.data);
    };

    getCoins();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (context.searchInput.trim().length > 0) {
      setResult(context.data.filter(coin=> coin.name.toLowerCase().includes(context.searchInput)).map(coin=>{
        return <Coin key={coin.id} rank={coin.market_cap_rank} image={coin.image} name={coin.name} price={coin.current_price} />
      }))
      
    }
    else {
      setResult(context.data.map(coin=>{
        return <Coin key={coin.id} rank={coin.market_cap_rank} image={coin.image} name={coin.name} price={coin.current_price} />
      }))
    }

  }, [context.data, context.searchInput]);

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {context.data && result}
      </tbody>
    </table>
  );
};

export default CoinList;
