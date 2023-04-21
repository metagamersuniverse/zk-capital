import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import { useEffect } from "react";
function Navbar() {
    useEffect(() => {
        ethEnabled(false);
    })
    return (
        <>
            <nav className={styles.navWrapper}>
                <div className={styles.navbar}>
                    <div className={styles.logoSection}>
                        <Link href=""><a>
                            {/* <h1 className={styles.logoText}>Globus Coin</h1> */}
                            <img src="/zkc-white.png" alt="Globus Logo" className={styles.logoImage} />
                        </a></Link>
                    </div>
                    <div className={styles.menuSection}>
                        <ul className={styles.menu}>

                        <li><Link href="https://app.zkc.capital/"><a className={styles.menuItem}><b>Dashboard</b></a></Link></li>
                            <li><Link href="#about"><a className={styles.menuItem}>About</a></Link></li>
                            <li><Link href="#token"><a className={styles.menuItem}>Token</a></Link></li>
                            <li><Link href="https://docs.zkc.capital/"><a className={styles.menuItem}>Whitepaper</a></Link></li>
                            <li><Link href="#roadmap"><a className={styles.menuItem}>Roadmap</a></Link></li>
                        </ul>
                        </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar


const Web3 = require("web3");

