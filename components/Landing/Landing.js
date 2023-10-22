import React from 'react'
import styles from "./Landing.module.css"
export default function Landing() {
  return (
    <div>
            <img className={styles.looper} src='./Looper-3.png' alt=''/>

        <div className={styles.landing} >
            <div  className={styles.landingTitle} >
            Empowering a new<br></br>Generation of Trillionaires
            </div>
            <div  className={styles.landingContent} >
            Trillioner Coin: One stop solution for Crypto Banking.
            </div>
            <div  className={styles.landingBtn} >
                <img src='./bttn.png' alt=''/>
           
            </div>
            <div className={styles.landingImage}>
            <img src='./front_bg.png' alt=''/>

            </div>
        </div>
    </div>
  )
}
