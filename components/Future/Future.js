import React from 'react'
import styles from "./Future.module.css"
export default function Future() {
  return (
    <div className={styles.future}>
         <img className={styles.ring} src='./ring.png' alt=''/>
         <img className={styles.ellipse} src='./Looper-5.png' alt=''/>


        <div  className={styles.futureBox}>
            <div  className={styles.futureContent}>
            <div>
            Dive into the future of wealth with Trillionaire Coin
            </div>
            <p>
            Where blockchain meets boundless possibilities in every transaction.

            </p>
            </div>
            <div  className={styles.futureImg}>
         {/* <img src='./table.png' alt=''/> */}
         {/* <div class="livecoinwatch-widget-3" lcw-base="INR" lcw-d-head="true" lcw-d-name="true" lcw-d-code="true" lcw-d-icon="true" lcw-color-tx="#ffffff" lcw-color-bg="#fff" lcw-border-w="1" ></div> */}
{/* <coingecko-coin-list-widget  coin-ids="bitcoin,ethereum,litecoin,tether,binancecoin,solana,trillioner" currency="inr" locale="en" width="0"></coingecko-coin-list-widget> */}
<coin-stats-ticker-widget coin-id="trillioner" locale="en" currency="USD" background="#fff" text-color="#000" border-color="rgba(0,0,0,0.15)" type="medium" font="Redhat" height="149" width="350" rank-background="#FFA959" status-up-color="#74D492" status-down-color="#FE4747" rank-text-color="#1C1B1B" ></coin-stats-ticker-widget>
<coin-stats-ticker-widget class="g2" coin-id="trillioner" locale="en" currency="INR" background="#fff" text-color="#000" border-color="rgba(0,0,0,0.15)" type="medium" font="Redhat" height="149" width="350" rank-background="#FFA959" status-up-color="#74D492" status-down-color="#FE4747" rank-text-color="#1C1B1B" ></coin-stats-ticker-widget>

            </div>


        </div>

    </div>
  )
}
