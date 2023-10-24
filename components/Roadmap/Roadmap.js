import React, { useEffect, useRef, useState } from 'react'
import styles from "./Roadmap.module.css"
import { useMediaQuery } from 'react-responsive'
export default function Roadmap() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1000px)'
  })
  const [rotation, setRotation] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
      const handleMouseMove = (e) => {
          if (elementRef.current) {
              const elementX = elementRef.current.offsetLeft + elementRef.current.offsetWidth / 2;
              const elementY = elementRef.current.offsetTop + elementRef.current.offsetHeight / 2;
              const deltaX = e.clientX - elementX;
              const deltaY = e.clientY - elementY;
              const angle = Math.atan2(deltaY, deltaX);

              setRotation(angle + Math.PI / 2);
          }
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
          document.removeEventListener('mousemove', handleMouseMove);
      };
  }, []);
  return (
    <div id='roadmap' style={{position:'relative'}}>
        <img class="reflection-grid-cell" className={styles.roadmap} src={ isDesktopOrLaptop ? './roadmap2.png' : './roadmap.png'} alt=''/>
        <img
       className={`${styles.roadmapInside}`}
          //   ref={elementRef}
          //   style={{
          //     transform: `rotate(${rotation}rad)`,
          // }}
            alt=''
            src='./roadmapIn.png'
        />
        {/* <img className={styles.roadmapRing} src='./roadmapRing.png' alt=''/> */}
        <img className={styles.roadmapBack} src='./roadmapBack.png' alt=''/>


    </div>
  )
}
