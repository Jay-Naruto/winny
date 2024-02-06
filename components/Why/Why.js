import React from 'react'
import styles from "./Why.module.css"
export default function Why() {
  return (
    <div className={styles.body} >
        <div className={styles.title}>WHY WINNY</div>
        <div className={styles.component}>

        <div className={styles.card} >
                <img src='./w1.png' alt=''/>
                <div className={styles.text1}>
                        NO BOT
                </div>               
                 <div className={styles.text2}>
                        Certified
                </div>
            </div>

            <div className={styles.card} >
                <img src='./w2.png' alt=''/>
                <div className={styles.text1}>
                       100%
                </div>               
                 <div className={styles.text2}>
                        Secure
                </div>
            </div>

            <div className={styles.card} >
                <img src='./w3.png' alt=''/>
                <div className={styles.text1}>
                       1 V 1
                </div>               
                 <div className={styles.text2}>
                        Player Battles
                </div>
            </div>

            <div className={styles.card} >
                <img src='./w4.png' alt=''/>
                <div className={styles.text1}>
                24x7
                </div>               
                 <div className={styles.text2}>
                        Support
                </div>
            </div>


        </div>
        
    </div>
  )
}
