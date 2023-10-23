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
<div class="coinmarketcap-currency-widget" data-currencyid="24245" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
<div class="coinmarketcap-currency-widget" data-currencyid="24245" data-base="INR" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
            </div>


        </div>

    </div>
  )
}
