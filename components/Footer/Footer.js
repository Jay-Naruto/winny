import React from 'react'
import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footerBox}>
            <div  className={styles.footerBoxLeft}>
                <div>
                    <img className={styles.footerBoxLeftLogo} src='./logo.png' alt=''/>
                </div>
                <div>
                    The Trillioner crypto project aims to bridge the gap between traditional finance and the crypto world by offering financial services for both crypto projects and private users. This will include access to our products as well as traditional fiat banking and financial services for blockchain businesses and individuals.
                </div>
                <div className={styles.footerBoxLeftSocials}>
                    <div>
                    <a href=''>
                    <img src='./Instagram Icon.png' alt=''/>
                    </a>
                    </div>
                    <div>
                    <a href=''>
                    <img src='./Facebook Icon.png' alt=''/>
                    </a>
                    </div>
                    <div>
                    <a href=''>
                    <img src='./Twitter Icon.png' alt=''/>
                    </a>
                    </div>

                </div>

            </div>
            <div  className={styles.footerBoxMid}>
                <div>
                <ul>
                    <li>
                        <a href='#about-us'>
                        About Us
                        </a>
                    </li>
                    <li>
                    <a href='#mission'>
                        Mission
                        </a>
                    </li>
                    <li>
                    <a href='#services'>
                       Services
                        </a>
                    </li>
                    <li>
                    <a href='#roadmap'>
                        Roadmap
                        </a>
                    </li>

                </ul>
                </div>
                <div>
                <ul>
                <li>
                <a href='#team'>
                       Team
                        </a>
                    </li>
                    <li>
                    <a href='#tokenomics'>
                        Tokenomics
                        </a>
                    </li>
                    <li>
                    <a href='#media'>
                       Media
                        </a>
                    </li>
                </ul>
                </div>

            </div>
            <div  className={styles.footerBoxMid}>

</div>
            <div  className={styles.footerBoxRight}>
{/* <img src='./graph.png' alt=''/> */}
 <div class="livecoinwatch-widget-1" lcw-coin="_TLC" lcw-base="INR" lcw-secondary="USDT" lcw-period="d" lcw-color-tx="#ffffff" lcw-color-pr="#58c7c5" lcw-color-bg="#1f2434" lcw-border-w="1" ></div>
            </div>
        </div>
        <div className={styles.foot}>
        © 2023 Trillioner. All Rights Reserved by QFX Market
        </div>
    </div>
  )
}
