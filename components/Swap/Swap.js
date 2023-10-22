import React, { useEffect, useState } from 'react'
import styles from "./Swap.module.css"

export default function Swap() {
  useEffect(() => {
    // describe widget configuration and saving to a global variable for future use
    var configuration = {
      from: 'USDT',
      to: 'TLC',
      fromChain: 'BSC',
      toChain: 'BSC',
      amount: 1,
      iframe: 'flex',
      hideSelectionFrom: false,
      hideSelectionTo: false,
      theme: 'dark',
      background: '#28372e',
      injectTokens: {
        bsc: ['0x8aed24bf6e0247be51c57d68ad32a176bf86f4d9'],
    },
    
      slippagePercent: {
        instantTrades: 2,
        crossChain: 5,
      },
    };

    // prevent accidental changes to the object, for example, when re-creating a widget for another theme
    Object.freeze(configuration);

    // create widget
    rubicWidget.init(configuration);
  }, []);

  return (
    <div className={styles.swap}>
        <div className={styles.swapInside}>
        <img className={styles.dots} src='./dots.png' alt=''/>

            <div>
            {/* <img className={styles.calc} src='./calc.png' alt=''/> */}
            <div id="rubic-widget-root"></div>

            </div>
            <div className={styles.swapContent}>
            <div className={styles.swapH1}>
            Instantly Swap 
                </div>
                <div className={styles.swapH2}>
                Your TLC Coin
                </div>
                <div className={styles.swapP}>
                Lorem ipsum dolor sit amet consectetur. Lacus purus in placerat nibh. In diam scelerisque quam scelerisque viverra eget. Tellus velit at lectus condimentum est morbi egestas dignissim eu. Lectus nibh in lectus id facilisis ut dictum urna. Risus tellus lectus purus leo fringilla ipsum. Nulla potenti nisi nibh dictum commodo orci.
                </div>
                <div className={styles.swapBtn}>
            <img src='./swapbtn.png' alt=''/>
                </div>

            </div>

        </div>
    </div>
  )
}
