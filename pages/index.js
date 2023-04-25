import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Cover from '../components/Cover3'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>ZkCapital - Secured Auto-Compounding Platform</title>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        <meta name="description" content="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Navbar />
      <Cover />

      {/* feature-section----done---- */}
      <section className={styles.featureSection} id="about">
        <div className={styles.featureBlock}>

          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-cube"></i></p>
            <h4 className={styles.featureHead}>DECENTRALISED SYSTEM</h4>
            <p className={styles.featureText}>
              A technical failure can paralyze all affiliate networks on a centralized platfotrm,
              until the cause is detected and rectified the system.
            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-shield-alt"></i></p>
            <h4 className={styles.featureHead}>Earn Up to 390,000% APS</h4>
            <p className={styles.featureText}>
             Zk Capital's Secured Auto-Compounding Platform
            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-project-diagram"></i></p>
            <h4 className={styles.featureHead}>Auto-Burning Mechanism</h4>
            <p className={styles.featureText}>
            1% of all $ZKC traded is burnt in the Dead address, reducing the circulating supply of $ZKC.
            </p>
          </div>

        </div>
      </section>
      {/* feature-section-------- */}

      
      {/* tokenomics-section----done--- */}
      <section className={styles.tokenomicsSection} id="token">
        <h2 className={styles.tokenomicsHeader}>Tokenomics</h2>
        <div className={styles.tokenomicsDetailsHolder}>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>Token Name</h4>
            <p className={styles.tokenDetailText}>ZK Capital</p>

            <h4 className={styles.tokenDetailHead}>Token Symbol</h4>
            <p className={styles.tokenDetailText}>ZKC</p>

            <h4 className={styles.tokenDetailHead}>Token Decimal</h4>
            <p className={styles.tokenDetailText}>5</p>
            <h4 className={styles.tokenDetailHead}>Initial Supply</h4>
            <p className={styles.tokenDetailText}>500,000</p>

            <h4 className={styles.tokenDetailHead}>Initial Burn</h4>
            <p className={styles.tokenDetailText}>365000</p>
          </div>
          <div className={styles.tokenomicsColumn}>

          <h4 className={styles.tokenDetailHead}>IDO Start Date</h4>
            <p className={styles.tokenDetailText}>Soon</p>

            <h4 className={styles.tokenDetailHead}>IDO End Date</h4>
            <p className={styles.tokenDetailText}>Soon</p>
            <h4 className={styles.tokenDetailHead}>Soft cap</h4>
            <p className={styles.tokenDetailText}>2 ETH</p>
            <h4 className={styles.tokenDetailHead}>Min Buy</h4>
            <p className={styles.tokenDetailText}>0.017 ETH</p>
            <h4 className={styles.tokenDetailHead}>Max Buy</h4>
            <p className={styles.tokenDetailText}>1 ETH</p>
          </div>
          <div className={styles.tokenomicsColumn}>

          <h4 className={styles.tokenDetailHead}>Presale</h4>
            <p className={styles.tokenDetailText}>65000</p>
            <h4 className={styles.tokenDetailHead}>Liquidity</h4>
            <p className={styles.tokenDetailText}>40000</p>
            <h4 className={styles.tokenDetailHead}>Community rewards</h4>
            <p className={styles.tokenDetailText}>10000</p>

            <h4 className={styles.tokenDetailHead}>Partnership</h4>
            <p className={styles.tokenDetailText}>11500</p>
            <h4 className={styles.tokenDetailHead}>Marketing</h4>
            <p className={styles.tokenDetailText}>8500</p>
            
          </div>
        </div>
      </section>
      {/* tokenomics-section------- */}

     { /* <section className={styles.chartSection} id="token">
        <div>
          <h3>Tokenomics</h3>
          <img src="/tokenomics-chart.png" alt="chart" />

        </div>
        <div>
          <h3>Fund Allocation</h3>
          <img src="/allocation-chart.png" alt="chart" />
        </div>
      </section>*/}

      {/* roadmap-section-----done----- */}
      <section className={styles.roadmapSection} id="roadmap">
        <h3>Roadmap</h3>

        <div className={styles.timeline}>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Phase 1</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                <li>Website Development</li>
  <li>Build Phase - Smart Contract</li>
  <li>Introductory Marketing</li>
  <li>Presale on Dxsale</li>
  <li>[Dex Listing]</li>
  <li>Post-Launch Marketing</li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Phase 2</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
              <ul>
  <li>Website Development</li>
  <li>Build Phase - dApp V1 Dashboard</li>
  <li>Deployment Phase - dApp Dashboard</li>
  <li>Twitter Marketing Campaign</li>
  <li>YouTube Marketing Campaign</li>
</ul>

              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Phase 3</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
  <li>Staking</li>
  <li>Featured ads</li>
  <li>Marketing</li>
  <li>100K users on platform</li>
  <li>Mobile application and wallet</li>
</ul>

              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Phase 4</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                <li>10,000 Token holders</li>
<li>10 Million Market Cap</li>
<li>100 Million Market Cap</li>
<li>2 Million users</li>
<li>5 million Monthly page views</li>
<li>Roadmap Rebuild</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* roadmap-section-------- */}


      {/* why-section-- */}
      <section className={styles.whySection} id="about">
        <div className={styles.whyTextSection}>
          <h2 className={styles.whyHeader}>Why choose us?</h2>
          <h3>One-Stop-Shop Experience:</h3>
          <p className={styles.whyAnswer}>
          Zk Capital offers a seamless, immutable, and secure decentralized classified platform that provides users with a one-stop-shop experience.</p>
          <div className={styles.whyAnswerPoint}>
            <h3>Privacy-Protected and Community-Driven:</h3>
            <p>
            Zk Capital prioritizes user privacy by offering uncensored advertising opportunities via privacy-protected, community-driven mechanisms.
            </p>
          </div>
          <div className={styles.whyAnswerPoint}>
            <h3>Secured Auto-Compounding and Auto-Staking:</h3>
            <p>
            Users can stake their Zk Capital native tokens on the platform, making Zk Capital the Secured Auto-compounding and Auto-staking platform that provides an attractive APY of 390,000%.
            </p>
          </div>
        </div>
        <div className={styles.whyImageSection}>
          <img src="/zkc-k.png" alt="zkc icon" />
        </div>
      </section>
      {/* why-section-- */}

      {/* footer--------- */}
      <section className={styles.footerSection}>
        <div className={styles.brandFooter}>
          <p className={styles.brandText}>Earn Passive Income with $ZKC's Buy-Hold-Earn Auto-Stake Feature</p>
          <p className={styles.brandText}>By</p>
          <p className={styles.brandText}><Link href="zkc.capital"><a target="_blank" rel="noreferrer">ZKC</a></Link></p>
        </div>
      </section>
      {/* footer--------- */}


    </>
  )
}


function submitForm() {
  let name = document.getElementById("name").value;
  let telegram = document.getElementById("telegram").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let data = {
    name,
    telegram,
    email,
    message
  }

  fetch('/api/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    alert("Application Submitted!");

    document.getElementById("name").value = "";
    document.getElementById("telegram").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
    }
  })
}