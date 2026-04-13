import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <footer className={styles.footer}>
        <div className={styles.coyright}>
          &copy;copyright {new Date().getFullYear()} By Worldwise .Inc
        </div>
      </footer>
    </div>
  );
}

export default Sidebar;
