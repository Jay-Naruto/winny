import React, { useEffect, useRef, useState } from 'react'
import styles from "./Map.module.css"
import { useMediaQuery } from 'react-responsive'
import Popup from 'reactjs-popup';
import { Fade } from 'react-awesome-reveal';

export default function Map() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  return (
    <div id='map' className={styles.ringBody} style={{position:'relative'}}>

        <img className={styles.roadmapBack} src='./multiring.png' alt=''/>
        {/* <img className={styles.coins} src='./coins.png' alt=''></img> */}
            <div className={styles.title}>
            People Using Winny
            </div>

            <Fade direction='down' delay={500} style={{width:'100%'}}>

        <div className={styles.mapBody} style={{position:'relative'}}>


        <img className={styles.map} src='./map.png' alt=''/>


        <Popup
        key={`tp1`}
       
        trigger={
            <img className={styles.p1} src='./person.png' alt=''/>

        }
        position={ isDesktopOrLaptop ?'top left': 'top right'}
        on={['hover', 'focus']}
        arrow={'top right' !== 'center center'}
      >
        <div className={styles.card} >
            <div className={styles.cardName}>Name</div>
            <div className={styles.cardText}>
            Lorem ipsum dolor sit amet consectetur. Id ac purus at quis mattis neque venenatis cras pretium. Tellus turpis faucibus massa viverra elit faucibus eget quam. In.
            </div>
            <div className={styles.cardEmail}>email.com</div>
        </div>
        </Popup>


              <Popup
        key={`tp2`}
        trigger={
            <img className={styles.p2} src='./person.png' alt=''/>

        }
        position={ isDesktopOrLaptop ?'top left': 'top right'}
        on={['hover', 'focus']}
        arrow={'top right' !== 'center center'}
      >
        <div className={styles.card} >
            <div className={styles.cardName}>Name</div>
            <div className={styles.cardText}>
            Lorem ipsum dolor sit amet consectetur. Id ac purus at quis mattis neque venenatis cras pretium. Tellus turpis faucibus massa viverra elit faucibus eget quam. In.
            </div>
            <div className={styles.cardEmail}>email.com</div>
        </div>
        </Popup>
        <Popup
        key={`tp3`}
        trigger={
            <img className={styles.p3} src='./person.png' alt=''/>

        }
        position='top right'
        on={['hover', 'focus']}
        arrow={'top right' !== 'center center'}
      >
        <div className={styles.card} >
            <div className={styles.cardName}>Name</div>
            <div className={styles.cardText}>
            Lorem ipsum dolor sit amet consectetur. Id ac purus at quis mattis neque venenatis cras pretium. Tellus turpis faucibus massa viverra elit faucibus eget quam. In.
            </div>
            <div className={styles.cardEmail}>email.com</div>
        </div>
        </Popup>
        <Popup
        key={`tp4`}
        trigger={
            <img className={styles.p4} src='./person.png' alt=''/>

        }
        position='top right'
        on={['hover', 'focus']}
        arrow={'top right' !== 'center center'}
      >
        <div className={styles.card} >
            <div className={styles.cardName}>Name</div>
            <div className={styles.cardText}>
            Lorem ipsum dolor sit amet consectetur. Id ac purus at quis mattis neque venenatis cras pretium. Tellus turpis faucibus massa viverra elit faucibus eget quam. In.
            </div>
            <div className={styles.cardEmail}>email.com</div>
        </div>
        </Popup>
        <Popup
        key={`tp5`}
        trigger={
            <img className={styles.p5} src='./person.png' alt=''/>

        }
        position='top right'
        on={['hover', 'focus']}
        arrow={'top right' !== 'center center'}
      >
        <div className={styles.card} >
            <div className={styles.cardName}>Name</div>
            <div className={styles.cardText}>
            Lorem ipsum dolor sit amet consectetur. Id ac purus at quis mattis neque venenatis cras pretium. Tellus turpis faucibus massa viverra elit faucibus eget quam. In.
            </div>
            <div className={styles.cardEmail}>email.com</div>
        </div>
        </Popup>
        <Popup
        key={`tp6`}
        trigger={
            <img className={styles.p6} src='./person.png' alt=''/>

        }
        position='top right'
        on={['hover', 'focus']}
        arrow={'top right' !== 'center center'}
      >
        <div className={styles.card} >
            <div className={styles.cardName}>Name</div>
            <div className={styles.cardText}>
            Lorem ipsum dolor sit amet consectetur. Id ac purus at quis mattis neque venenatis cras pretium. Tellus turpis faucibus massa viverra elit faucibus eget quam. In.
            </div>
            <div className={styles.cardEmail}>email.com</div>
        </div>
        </Popup>



        


        </div>
        </Fade>



    </div>
  )
}
