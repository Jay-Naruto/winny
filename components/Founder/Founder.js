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
                        The Remarkable Rise Of Lavish Choudhry: A Businessman's Journey From Small Town To Global Stage
                        </div>
                        <div >
                            <a target='_blank' href='https://news.abplive.com/brand-wire/the-remarkable-rise-of-lavish-choudhry-a-businessman-s-journey-from-small-town-to-global-stage-1588119'>
                            <img src='./bttn.svg' alt=''/>

                            </a>
                        </div>
                    </div>

                </div>


                <div data-aos="fade-down" data-aos-delay="300" className={styles.founderBoxRow2}>
                    <div className={styles.founderBoxRow2Img}>
                         <img src='https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20221021080513.jpg' alt=''/>
                    </div>
                    <div className={styles.founderBoxRowContent2}>
                        <div>
                       Award-winning Social Entrepreneur Lavish Choudhary launches Realty Company
                        </div>
                        <div  >
                        <a target='_blank' href='https://www.aninews.in/news/business/business/award-winning-social-entrepreneur-lavish-choudhary-launches-realty-company20221021133602/'>
                            <img src='./bttn.svg' alt=''/>

                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
