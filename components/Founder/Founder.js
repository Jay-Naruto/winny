import React from 'react'
import styles from "./Founder.module.css"
export default function Founder() {
  return (
    <div id='media' className={styles.founder}>
        <div  className={styles.founderBox}>
            <div  className={styles.founderBoxHeader}>
            Founder in Media
            </div>
            <div className={styles.founderBoxRow} >
                <div data-aos="fade-down" className={styles.founderBoxRow1}>
                    <div className={styles.founderBoxRow1Img}>
                         <img src='./media1.png' alt=''/>
                    </div>
                    <div className={styles.founderBoxRowContent}>
                        <div>
                        Lavish Choudhary reveals expert tips for building a successful business
                        </div>
                        <div>
         <img src='./check.png' alt=''/>
                        </div>
                    </div>

                </div>


                <div data-aos="fade-down" data-aos-delay="300" className={styles.founderBoxRow2}>
                    <div className={styles.founderBoxRow2Img}>
                         <img src='./media2.png' alt=''/>
                    </div>
                    <div className={styles.founderBoxRowContent2}>
                        <div>
                        Lavish Choudhary reveals expert tips for building a successful business
                        </div>
                        <div>
         <img src='./check.png' alt=''/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
