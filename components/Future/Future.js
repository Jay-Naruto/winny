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
         <img src='./table.png' alt=''/>
            </div>


        </div>

    </div>
  )
}
