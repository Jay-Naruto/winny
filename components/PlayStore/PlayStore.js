import React from 'react'
import styles from "./PlayStore.module.css"
export default function PlayStore() {
  return (
    <div className={styles.playstore}>
        <div className={styles.playstoreBox}>
            <img className={styles.playstoreEllipse} src='./ellipse1.png' alt=''/>
            <div className={styles.playstoreContent}>
                <div>
                Trillioner Wallet- For<br></br>Your All Crypto Solution
                </div>
                <p>
                Trillioner wallets often offer advanced security features to protect your digital assets, such as two-factor authentication, biometric authentication, Buy from debit card, swap and many more features.

                </p>
                <p><strong>
                Buy Crypto Through Paytm, PhonePay, GooglePay or any UPI App
                    </strong></p>
               <div className={styles.btns}>
                <img src='./p1.png' alt='' />
                <img src='./p2.png' alt='' />
               </div>
            </div>
            <div className={styles.phone}>
                <img src='./phone.png' alt=''/>
            </div>

        </div>
    </div>
  )
}
