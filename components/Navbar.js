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

                        <li><Link href="#"><a className={styles.menuItem}><b>Dashboard</b></a></Link></li>
                            <li><Link href="#about"><a className={styles.menuItem}>About</a></Link></li>
                            <li><Link href="#token"><a className={styles.menuItem}>Token</a></Link></li>
                            <li><Link href="https://docs.zkc.capital/"><a className={styles.menuItem}>Whitepaper</a></Link></li>
                            <li><Link href="#roadmap"><a className={styles.menuItem}>Roadmap</a></Link></li>
                        </ul>
                        <a className={styles.connectBtn} id="connect-wallet-btn" onClick={() => ethEnabled(true)}>Connect Wallet</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar


const Web3 = require("web3");
const ethEnabled = async (reload) => {
    if (window.ethereum) {
        let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        window.web3 = new Web3(window.ethereum);
        document.getElementById("connect-wallet-btn").innerHTML = accounts[0].slice(0, 6) + "..." + accounts[0].slice(-6, -1) + accounts[0].slice(-1);
        document.getElementById("connect-wallet-btn").style.background = "rgb(25,25,10)";
        document.getElementById("connect-wallet-btn").style.borderRadius = "10px";
        document.getElementById("connect-wallet-btn").style.boxShadow = "none";
        document.getElementById("connect-wallet-btn").style.color = "#9EF5FF";
        localStorage.setItem("address", accounts[0]);
        if (reload) {
            location.reload();
        }
        return true;
    }
    else {
        document.getElementById("notice-box").style.display = "flex";
    }
    return false;
}