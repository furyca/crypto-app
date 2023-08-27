// eslint-disable-next-line
import style from "./Search.module.scss";
import { useContext } from "react";
import { Context } from "../../Context";

const Search = () => {
  const context = useContext(Context);

  return (
    <input
      type="text"
      placeholder="Search.."
      onChange={(e) => context.setSearchInput(e.target.value)}
    />
  );
};

export default Search;
