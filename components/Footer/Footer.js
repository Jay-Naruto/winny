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
                    {/* <div>
                    <a target='_blank' href=''>
                    <img src='./Instagram Icon.png' alt=''/>
                    </a>
                    </div> */}
                    <div>
                    <a target='_blank' href='https://www.facebook.com/Trillionertoken'>
                    <img src='./Facebook Icon.png' alt=''/>
                    </a>
                    </div>
                    <div>
                    <a target='_blank' href='https://twitter.com/Trillionertoken'>
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
                    <a href='#roadmap'>
                        Roadmap
                        </a>
                    </li>

                </ul>
                </div>
                <div>
                <ul>
                <li>
                    <a href='#services'>
                       Services
                        </a>
                    </li>
                {/* <li>
                <a href='#team'>
                       Team
                        </a>
                    </li>
                    <li>
                    <a href='#tokenomics'>
                        Tokenomics
                        </a>
                    </li> */}
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
 {/* <div class="livecoinwatch-widget-1" lcw-coin="_TLC" lcw-base="INR" lcw-secondary="USDT" lcw-period="d" lcw-color-tx="#ffffff" lcw-color-pr="#58c7c5" lcw-color-bg="#1f2434" lcw-border-w="1" ></div> */}
 <coin-stats-chart-widget

 style={{width:'100%'}}
 class="coin-stats-ticker-widget"
 type="medium" coin-id="trillioner" width="435" chart-height="170" currency="INR" locale="en" bg-color="#1C1B1B" text-color="#FFFFFF" status-up-color="#74D492" status-down-color="#FE4747" buttons-color="#1C1B1B" chart-color="#FBBD18" chart-gradient-from="rgba(255,255,255,0.07)" chart-gradient-to="rgba(0,0,0,0)" chart-label-background="#000000" candle-grids-color="rgba(255,255,255,0.1)" border-color="rgba(255,255,255,0.15)" font="Roboto, Arial, Helvetica"></coin-stats-chart-widget>
            </div>
        </div>
        <div className={styles.foot}>
        © 2023 Trillioner. All Rights Reserved by Trillioner (TLC)
        </div>
    </div>
  )
}
