import React from 'react'
import styles from "./Partners.module.css"
import CardsComp from '../CardsComp/CardsComp'
export default function Partners() {
  return (
    <div className={styles.partners}>
        <div>
        <img className={styles.spAll} src='./sp.png' alt=''/>
        </div>
        <div>
            <CardsComp/>
        </div>
        <div className={styles.spContent}>
            <div>
                <img src='./legal.png' alt=''/>
            </div>
            <div>
            Legal Opinion By Legal Kornet USA
            </div>
            <p>
            TLC Legal Opinion is taken by the top professions of Legal Kornet, They are experts clearly consider all sufficient facts confirming each of the conclusions set forth in the document. TLC legal opinion covered by top lawyers contains the interpretation of facts and potential risks of the matter. This ensures that for TLC the assumptions are accurate and complete.
            </p>
        </div> 
        <div className={styles.project}>
            <img  className={styles.projectBkg} src='./projectbkg.png' alt=''/>
            <img  className={styles.projectEllipse} src='./Looper-6.png' alt=''/>

            <div  className={styles.projectContent} >
                <div>
                    Project Rating by World's Top Companies.
                </div>
                <div
                className={styles.projectSqImg} 
                >
            <img  src='./projectSqImg.png' alt=''/>
                
                </div>

            </div>
        </div>
    </div>
  )
}
