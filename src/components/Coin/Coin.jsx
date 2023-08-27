// eslint-disable-next-line
import style from "./Coin.module.scss";

const Coin = ({rank, image, name, price}) => {
  return (
    <tr>
      <td>{rank}</td>
      <td><img src={image} alt={name} width={50} /> <span>{name}</span> </td>
      <td>${price.toFixed(2)}</td>
    </tr>
  );
};

export default Coin;
