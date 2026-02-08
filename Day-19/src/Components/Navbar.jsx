import { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";
import Navbar_2 from "./Navbar_2";

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext);
  return (
    <div className={theme}>
      <h2>Sheryians</h2>
      <Navbar_2 />
    </div>
  );
};

export default Navbar;
