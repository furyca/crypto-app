// eslint-disable-next-line
import style from "./Header.module.scss"
import Search from "../Search/Search";


const Header = () => {
  return (
    <header>
      <h1>Cryptocurrency Hub</h1>
      <Search />
    </header>
  );
};

export default Header;
