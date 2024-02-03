import React, { useEffect } from 'react'
import styles from "./Partners.module.css"
import CardsComp from '../CardsComp/CardsComp'
import { useMediaQuery } from 'react-responsive'
import Marquee from "react-fast-marquee";

export default function Partners() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })

  return (
    <div id='games' className={styles.partners}>
        {/* <div className={styles.bkgBody}>
        <img  className={styles.spAll} src= 
        { isDesktopOrLaptop ? "./Section 3.png" : './Section 3.png'} alt=''/>
      
        <div className={styles.spContent}>
        Lorem ipsum dolor sit amet
            <br></br><br>
            </br>
            <img src='./download.png' alt=''/>
         
        </div>
        </div> */}
        <img className={styles.el2} src='./el2.png' alt=''/>
 
        <div className={styles.project}>

        <img className={styles.box} src='./box.png' alt=''/>


            <div  className={styles.projectContent} >
                <div className={styles.projectBody}>

                <div className={styles.text1} >
                   CALL OF
                </div>
                <div className={styles.text1}>
                    DUTY
                </div>
                <div className={styles.text2}>BLACK OPS</div>
                <div className={styles.text3}>
 Tellus velit at lectus condimentum est morbi egestas dignissim eu. Lectus nibh in lectus id facilisis ut dictum urna. Risus tellus lectus purus leo fringilla ipsum. Nulla potenti nisi nibh dictum commodo orci.
                    
                </div>

                </div>
                {/* <img src="./bomb.png" className={styles.bomb}/> */}

                <div
                className={styles.projectSqImg} 
                >

{/* <div className="wheel">
<div className="card">
    <img src="./g1.png" className="card1"/>
        <img src="./g2.png" className="card2"/>
    </div>
    <div className="card">
    <img src="./g3.png" className="card3"/>
        <img src="./g4.png" className="card4"/>
    </div>
    <div className="card">
    <img src="./g5.png" className="card3"/>
        <img src="./g6.png" className="card4"/>
    </div>
    <div className="card">
    <img src="./g1.png" className="card3"/>
        <img src="./g3.png" className="card4"/>
    </div>
    <div className="card">
    <img src="./g3.png" className="card3"/>
        <img src="./g4.png" className="card4"/>
    </div>
    <div className="card">
    <img src="./g5.png" className="card3"/>
        <img src="./g6.png" className="card4"/>
    </div>
    <div className="card">
    <img src="./g1.png" className="card3"/>
        <img src="./g2.png" className="card4"/>
    </div>


    </div> */}
    <div className='marqueebody'>
    <Marquee direction='up' autoFill={true} className='marquee'>
     <img src="./g1.png" className="cardM"/>
     <img src="./g2.png" className="cardM"/>
     <img src="./g3.png" className="cardM"/>

     </Marquee>
     <Marquee direction='down' autoFill={true} className='marquee2'>
     <img src="./g4.png" className="cardM"/>
     <img src="./g5.png" className="cardM"/>
     <img src="./g6.png" className="cardM"/>

     </Marquee>
    </div>

     

    

                </div>
                </div>


            </div>
        </div>
  )
}
