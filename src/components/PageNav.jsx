import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useState } from "react";
function PageNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>

        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>

      <div
        className={`${styles.hamburger} ${open ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* the side bar to display */}
      <div className={`${styles.sidebar} ${open ? styles.show : ""} `}>
        <NavLink to="/product">Product</NavLink>

        <NavLink to="/pricing">Pricing</NavLink>

        <NavLink to="/login" className={styles.ctaLink}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default PageNav;
