import React from 'react'
import styles from "./Roadmap.module.css"
export default function Roadmap() {
  return (
    <div style={{position:'relative'}}>
        <img className={styles.roadmap} src='./roadmap.png' alt=''/>
        <img className={styles.roadmapInside} src='./roadmapIn.png' alt=''/>
        <img className={styles.roadmapBack} src='./roadmapBack.png' alt=''/>


    </div>
  )
}
