import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";

const getLinkStyles = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={getLinkStyles}>
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Movie
      </NavLink>
    </nav>
  );
};

export default Navigation;