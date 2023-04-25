import styles from "../styles/Cover.module.css"
import Link from "next/link"
import { useState } from "react";
import { useEffect } from "react";
import contractAbi from './contractABI.json';
let Web3 = require('web3')

var balance_;
var minPurchase_;
var maxPurchase_;
let bscscanTokenUrl_;
let bscscanContractUrl_;
let tokenImageUrl_;
let percentage_;


const MyComponent = () => {

    let tokenData = {
        "id": "1",
        "token": "0x22E4b541f77D772b1E8dB5732417F812429a3FD5",
        "presaleContract": "0xAbbA010708F4087eADB2Ce5C6575b64bF171B4F2",
        "contractABI": "",
        "tokenIconURL": "https://963623400-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGTLPiuxmAOlliVyfRnxb%2Fuploads%2FD9bvLwS5EosVVfne4nEh%2Fzkc.png?alt=media&token=619369ca-509c-4b47-8e75-297eaff9f370",
        "tokenName": "ZkCapital",
        "tokenSymbol": "ZKC",
        "tokenForPresaleInitial": "65000",
        "tokenForPresaleNumberOfZeros": "10",
        "totalSupplyInitial": "500000",
        "totalSupplyNumberOfZeros": "5",
        "decimals": "5",
        "hardCap": "10",
        "rate": "6500",
        "type": "arbitrum",
        "presaleRunning": "true",
        "kycVerified": "https://github.com/NovosAuditKYC/KYC/blob/main/Zk_Capital_KYC_NOVOS.png",
        "smartContractAudit": "https://github.com/securewise/audits/blob/main/zkCapital_SecureWise.pdf",
        "instagram": "https://www.instagram.com/example/"
    }

    const [web3, setWeb3] = useState(null)
    const [address, setAddress] = useState(null)

    // let abi = JSON.parse(tokenData.contractABI);
    let abi = contractAbi;
    let contractAddress = tokenData.presaleContract;
    

    useEffect(() => {
        let endTime_;

        window.ethereum ?
            ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
                setAddress(accounts[0])
                let w3 = new Web3(ethereum)
                setWeb3(w3)

               
                let c = new w3.eth.Contract(abi, contractAddress)
                setContract(c)

                c.methods._totalSupply().call().then((_supply) => {
                    _supply = _supply / 10 ** 18
                    document.getElementById('total-supply').innerHTML = _supply;
                }).catch((err) => console.log(err))

                c.methods._rate().call().then((_rate) => {
                    document.getElementById('rate').innerHTML = _rate;
                }).catch((err) => console.log(err))

                c.methods._hardCap().call().then((_hardCap) => {
                    _hardCap = _hardCap / 10 ** 18;
                    document.getElementById('hard-cap').innerHTML = _hardCap;
                }).catch((err) => console.log(err))

                c.methods._weiRaised().call().then((_weiRaised) => {
                    let _bnb = _weiRaised / 10 ** 18;
                    document.getElementById('amount-raised').innerHTML = _bnb + " ETH";
                    let percentage = (_bnb / tokenData.hardCap) * 100
                    document.getElementById('bar-percentage').style.width = percentage.toString();
                    document.getElementById('target-percentage').innerHTML = percentage.toString().slice(0, 4) + " %"
                    localStorage.setItem("percentage", percentage);

                    percentage_ = percentage;
                }).catch((err) => console.log(err))

                c.methods._minPurchase().call().then((minAmount) => {
                    minPurchase_ = minAmount
                }).catch((err) => console.log(err))

                c.methods._maxPurchase().call().then((maxAmount) => {
                    maxPurchase_ = maxAmount
                }).catch((err) => console.log(err))

                c.methods._endTime().call().then((endTime) => {
                    endTime_ = endTime
                    const day = document.getElementById('days');
                    const hr = document.getElementById('hours');
                    const min = document.getElementById('minutes');
                    const sec = document.getElementById('seconds');

                    const eventDate = endTime * 1000;
                    const id = setInterval(() => {
                        const now = new Date().getTime();
                        const diff = eventDate - now;

                        const d = Math.floor(eventDate / (1000 * 60 * 60 * 24) - (now / (1000 * 60 * 60 * 24)));
                        const h = Math.floor((eventDate / (1000 * 60 * 60) - (now / (1000 * 60 * 60))) % 24);
                        const m = Math.floor((eventDate / (1000 * 60) - (now / (1000 * 60))) % 60);
                        const s = Math.floor((eventDate / (1000) - (now / (1000))) % 60);

                        if (diff > 0) {
                            day.innerHTML = d;
                            hr.innerHTML = h;
                            min.innerHTML = m;
                            sec.innerHTML = s;
                        }
                        else {
                            day.innerHTML = 0;
                            hr.innerHTML = 0;
                            min.innerHTML = 0;
                            sec.innerHTML = 0;
                        }
                    }, 1000);

                }).catch((err) => console.log(err))

                c.methods._presaleStarted().call().then((_status) => {
                    let status;
                    if (_status) {
                        status = "ACTIVE";
                    }
                    else {
                        status = "PAUSED";
                    }
                    document.getElementById("presale-status").innerHTML = status;

                }).catch((err) => console.log(err))

                document.getElementById("buy-button").disabled = true;
                document.getElementById("buy-button").style.background = "black"
                document.getElementById("buy-button").style.boxShadow = "none"
                document.getElementById("buy-button").style.cursor = "not-allowed"

                if (tokenData.instagram == "") {
                    document.getElementById('instagram').style.display = "none";
                } else {
                    document.getElementById('instagram').href = tokenData.instagram;
                    document.getElementById('instagram').style.display = "block";
                }
                
                if (tokenData.facebook == "") {
                    document.getElementById('facebook').style.display = "none";
                }
                if (tokenData.website == "") {
                    document.getElementById('website').style.display = "none";
                }
                if (tokenData.whitepaper == "") {
                    document.getElementById('whitepaper').style.display = "none";
                }
                if (tokenData.telegram == "") {
                    document.getElementById('telegram').style.display = "none";
                }
                if (tokenData.twitter == "") {
                    document.getElementById('twitter').style.display = "none";
                }
                if (tokenData.kycVerified == "") {
                    document.getElementById('verified').style.display = "none";
                }
                if (tokenData.youtube == "") {
                    document.getElementById('youtube').style.display = "none";
                }


            }).catch((err) => console.log(err))
            : console.log("Please install MetaMask")



    }, [])

    useEffect(() => {
    
        })

    function Countdown() {
      useEffect(() => {
        const countdownDate = new Date('April 30, 2023 19:00:00 UTC').getTime();
    
        const countdownInterval = setInterval(() => {
          const now = new Date().getTime();
          const timeRemaining = countdownDate - now;
    
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
          document.getElementById('days').textContent = days;
          document.getElementById('hours').textContent = hours;
          document.getElementById('minutes').textContent = minutes;
          document.getElementById('seconds').textContent = seconds;
    
          if (timeRemaining < 0) {
            clearInterval(countdownInterval);
          }
        }, 1000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(countdownInterval);
      }, []);
    }
    

    function buyToken(amount) {
        let _price = web3.utils.toWei(amount);

        let tx = {
            from: address,
            to: contractAddress,
            value: web3.utils.numberToHex(_price)
        }
        let txHash = ethereum.request({
            method: 'eth_sendTransaction',
            params: [tx],
        }).then((hash) => {
            alert("Transaction hash: " + hash)
        }).catch((err) => console.log(err))

        return txHash
    }

    function validateExchangeAmount(e) {
        document.getElementById("error-text").style.display = "none";
        document.getElementById("notice-text").style.display = "none";
        console.log(minPurchase_, maxPurchase_)
        let value = document.getElementById('quantity').value;
        let walletBalance = balance_ / 10 ** 18;
        let minPurchase = minPurchase_ / 10 ** 18;
        let maxPurchase = maxPurchase_ / 10 ** 18;
        var valid = true;
        if (value > walletBalance) {
            document.getElementById('quantity').value = Number(walletBalance.toString().slice(0, 6))
            value = document.getElementById('quantity').value;
            document.getElementById('notice-text').innerHTML = "You'll get ~ " + value * tokenData.rate + " " + tokenData.tokenSymbol
            document.getElementById('notice-text').style.display = "flex";
            validateExchangeAmount()
        }
        else if (value < minPurchase) {
            valid = false
            document.getElementById("error-text").innerHTML = "minimum exchnage amount is " + minPurchase + " ETH";
            document.getElementById("error-text").style.display = "flex";
            document.getElementById("buy-button").disabled = true;
            document.getElementById("buy-button").style.background = "black"
            document.getElementById("buy-button").style.boxShadow = "none"
            document.getElementById("buy-button").style.cursor = "not-allowed"
        }
        else if (value > maxPurchase) {
            valid = false;
            document.getElementById("error-text").innerHTML = "maximun exchnage amount is " + maxPurchase + " ETH";
            document.getElementById("error-text").style.display = "flex";
        }
        if (valid && walletBalance > minPurchase) {
            document.getElementById('notice-text').innerHTML = "You'll get ~ " + value * tokenData.rate + " " + tokenData.tokenSymbol
            document.getElementById('notice-text').style.display = "flex";
            document.getElementById("buy-button").disabled = false;
            document.getElementById("buy-button").style.background = "linear-gradient(to bottom, #68ABCC, #9EF5FF)"
            document.getElementById("buy-button").style.boxShadow = "0px 0px 5px #9EF5FF"
            document.getElementById("buy-button").style.cursor = "pointer"
            document.getElementById("buy-button").style.color = "black"
        }
    }

    function buyButtonPressed() {
        let value = document.getElementById('quantity').value;
        buyToken(value)
    }

    bscscanTokenUrl_ = "https://arbiscan.io/address/" + tokenData.token;
    bscscanContractUrl_ = "https://arbiscan.io/address/" + tokenData.presaleContract;
    tokenImageUrl_ = tokenData.tokenIconURL;
    var audited_ = tokenData.smartContractAudit;
    var verified_ = tokenData.kycVerified;
    

    var zeros = ""
    for (var i = 0; i < tokenData.totalSupplyNumberOfZeros; i++) {
        zeros += "0"
    }
   var totalSupply_ = tokenData.totalSupplyInitial + zeros;

    zeros = ""
    for (var j = 0; j < tokenData.tokenForPresaleNumberOfZeros; j++) {
        zeros += "0"
    }

   var tokenForPresale_ = tokenData.tokenForPresaleInitial + zeros;

    useEffect(() => {
        percentage_ = localStorage.getItem("percentage")
    })

    function focusPresale() {
        document.getElementById("presale-container").style.boxShadow = "0px 0px 10px rgb(255,180,60)";
    }

    function copyAddress() {
        var copyText = document.getElementById("contract-address");
        navigator.clipboard.writeText(copyText.innerHTML);
        alert("Address Copied to Clipboard");
    }


    return (
        <>
            <section className={styles.cover}>
                <video autoPlay muted loop className={styles.video}>
                    <source src="/cover-video.mp4" type="video/mp4" />
                </video>

                <div className={styles.particlesWrapper}>
                    <div id="particles-js"></div>
                </div>
                <div className={styles.tokenPresaleContainer}>
                    <div className={styles.tokenPresaleContainerInner} id="presale-container">
                        <div className={styles.cardHeader}>
                            <div className={styles.logoBlock}>
                                <img src={tokenImageUrl_} alt="token-image" className={styles.tokenImagePrime} />
                            </div>

                            <div className={styles.primeBlock}>
                                <h2 className={styles.tokenNamePrime}>{tokenData.tokenName}</h2>
                                <p className={styles.exchangeMode}>{tokenData.tokenSymbol} / ETH</p>
                                <a target="_blank" href={bscscanTokenUrl_} rel="noreferrer">View on Arbiscan</a>
                            </div>
                            <div className={styles.badgeHeader}>
                                <a target="_blank" rel="noreferrer" href={tokenData.smartContractAudit} className={styles.auditedBadge} title="Smart Contract Audited" id='audited'><i className="las la-check-circle"></i>Audited</a>

                                <a target="_blank" rel="noreferrer" href={tokenData.kycVerified} className={styles.verifiedBadge} title="KYC Verified" id='verified'><i className="las la-shield-alt"></i>Verified</a>
                            </div>
                        </div>
                        {/* countdown */}
                        

                <div className={styles.countdownContainer}>
      <div className={styles.countdownWrapper}>
        <p>Start</p>
        <Countdown />
        <p><span id='days'></span></p>:
        <p><span id='hours'></span></p>:
        <p><span id='minutes'></span></p>:
        <p><span id='seconds'></span></p>
      </div>
    </div>


                        

                        <div className={styles.rateBlockPrime}>
                            <p className={styles.currencyToToken}>1 ETH = <span id="rate">6500</span> {tokenData.tokenSymbol}</p>
                        </div>
                        <div className={styles.barBlockPrime}>
                            <div className={styles.upperStatLine}>
                                <p className={styles.upperStatCode} id="presale-status"></p>
                                <p className={styles.upperStatPercentage} id="target-percentage"></p>
                            </div>
                            <div className={styles.barActualPrime}>
                                <div className="barRatePrime" id='bar-percentage'></div>
                            </div>
                            <style jsx>{`
                                .barRatePrime{
                                    height: 100%;
                                    width:0%;
                                    width: ${percentage_}%;
                                    border-radius: 10px;
                                    background: linear-gradient(to bottom, #68ABCC, #9EF5FF);
                                }
                                `}
                            </style>
                            <div className={styles.lowerStatLine}>
                                <p className={styles.lowerStatCurrency} id="amount-raised"></p>
                                <p className={styles.lowerStatToken}>Hard Cap <span id="hard-cap">10</span> ETH</p>
                            </div>
                        </div>

                        {/* need to remove style={{ pointerEvents: 'none' }} */}
                        <div className={styles.leastDetailBlockPrime}>
                            </div>
                    </div>
                    <div className={styles.brandText}><Link href="#"><a target="_blank" rel="noreferrer" id="host">Presale Link</a></Link></div>
                </div>
                <div className={styles.textSection}>

                    <h2 className={styles.header}>Zk Capital - the highest decentralized classified platform on Arbitrum Chain</h2>
                    <h4 className={styles.tag}>The Zk Capital is the Highest decentralized classified platform built on Arbitrum Chain. ZK CAPITAL has rooted its credibility amongst its target clients by enriching them with a one-stop-shop experience that is seamless, immutable, and secure; it is determined to provide its users uncensored advertising opportunities via privacy protected, community driven.</h4>
                    <div className={styles.actionWrapper}>
                        <Link href="https://t.me/zkcapitalofficial"><a className={styles.actionBtn}>Join Now</a></Link>
                        <a className={styles.actionBtn} href="#" target="_blank" rel="noopener noreferrer">Buy Now</a>
</div>
                </div>
            </section>

            {/* need to remove style={{ display: 'none' }} */}
           
        </>
    )
}

MyComponent.displayName = "MyComponent"
export default MyComponent;
