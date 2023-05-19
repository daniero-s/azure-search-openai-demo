import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>IA-ChatGPT Miranda do Douro</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Miranda do Douro | TAC Services</h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
