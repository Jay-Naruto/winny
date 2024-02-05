import React from 'react'
import styles from "./Phase.module.css"
import { Fade, Zoom } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
export default function Phase() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })
  return (
    <div  className={styles.body} >
        <div className={styles.component} >

            <div className={styles.titleBox}>
                <div id='roadmap' className={styles.titleBox1}>Phase 1</div>
                <div className={styles.titleBox2} >
                Conquer the Climb with Hyper
                </div>
                <div className={styles.titleBox3} >
                Casual Battles and Rewarding Domination
                </div>
            </div>



            <div className={styles.phaseBox}>
<Fade style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}} direction='right'>

            <div className={styles.phaseBox1}>
<div className={styles.phaseImages}>
<img className={styles.phaseImg1} src='./phase1.png' alt=''/>
<Zoom delay={500} className={styles.phaseImg2}>
<img  src='./phase1Obj.png' alt=''/>
</Zoom>
</div>
<div className={styles.phaseContent}>
    <div className={styles.phaseBoxTitle}>
        The Winny Ascent: Where Skill, Perseverance,
    {isDesktopOrLaptop ? <></> : <br></br> }
        and High Scores Reign Supreme
    </div>
    <div className={styles.phaseBoxContent}>
        Winny isn't just about quick thrills; it's about mastering hyper-casual games, pushing your limits, and leaving your mark on the prestigious Winny leaderboard. Every match is a chance to conquer new heights, and the path to glory is paved with three key elements
    <br></br>
    <br></br>
    
        Unrelenting Play: Dedicate yourself to the game! The more you play, the greater your chances of securing a coveted spot on the leaderboard. Every match counts, adding to your overall play count.
        Victorious Climb: True champions thrive on victories. Win your 1v1 battles, and watch your rank ascend with each conquest. Remember, wins contribute significantly to your leaderboard score.
        Conquering Your Past: True mastery lies in surpassing your own limits. Every time you win a game with a new high score, you earn bonus points that propel you further up the ranks. Show the world your unwavering skill and claim your throne!
                        
    </div>
</div>
</div>
</Fade>



<div className={`${styles.phaseBox1} ${styles.reverseColm}`}>

<Fade style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}  direction='left'>

<div className={styles.phaseContent}>
    <div className={styles.phaseBoxTitle}>
    A Welcoming Gateway and a Boost for 
    {isDesktopOrLaptop ? <></> : <br></br> }
    Your Journey
    </div>
    <div className={styles.phaseBoxContent}>
    Intuitive Onboarding: We ensure a smooth start with a guided walkthrough, introducing key features and gameplay mechanics.

    <br></br>
    2,000 Winny Tokens Welcome Bonus: Start your competitive journey with a head start – your free entry ticket to exciting victories and potential leaderboard dominance.
                    
    </div>
</div>

<div className={styles.phaseImages}>
<img className={styles.phaseImg1} src='./phase2.png' alt=''/>
<Zoom delay={500} className={styles.phaseImg2}>
<img  src='./phase2Obj.png' alt=''/>
</Zoom>
</div>
</Fade>
</div>


<div className={styles.phaseBox1}>
<Fade style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}} direction='right'>

<div className={styles.phaseImages}>
<img className={styles.phaseImg1} src='./phase3.png' alt=''/>
<Zoom delay={500} className={styles.phaseImg2}>
<img  src='./phase3Obj.png' alt=''/>
</Zoom>
</div>

<div className={styles.phaseContent}>

    <div className={styles.phaseBoxTitle}>
    The Winny Life: Fueling Your 1v1 Battles 
    {isDesktopOrLaptop ? <></> : <br></br> }
    and the Reward Pool
    </div>
    <div className={styles.phaseBoxContent}>
    Play with Purpose: Every exhilarating 1v1 match requires a single Winny Life, your passport to the battleground. Purchase them with your Winny tokens (1 Winny Life for 20 tokens).

        <br></br>
    <br></br>
    Beyond Entry, It's an Investment: Remember, those 20 Winny tokens you spend on a Winny Life aren't simply gone. They contribute to the reward pool for the Top 10 leaderboard, creating a self-sustaining ecosystem where everyone benefits.               
    </div>
<img className={styles.el1} src='./el1.png' alt=''/>

</div>

</Fade>
</div>



<div className={`${styles.phaseBox1} ${styles.reverseColm}`}>
<Fade style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}} direction='left'>


<div className={styles.phaseContent}>
    <div className={styles.phaseBoxTitle}>
    The Thrill of the Chase: The Winny 
    {isDesktopOrLaptop ? <></> : <br></br> }
    Leaderboard
    </div>
    <div className={styles.phaseBoxContent}>
    Compete Head-to-Head: Every match matters! Play relentlessly, win strategically, and watch your name climb the dynamic Winny leaderboard. Aim for the coveted Top 10 spot!

        <br></br>
    <br></br>
    Rewards that Fuel the Fire: As a Top 10 champion, you'll be handsomely rewarded. 900 Winny tokens will be distributed amongst these heroes, with progressively larger shares for the highest ranks. Remember, your contribution to the Winny Life pool increases the total reward!
                     
    </div>
    
</div>
<div className={styles.phaseImages}>
<img className={styles.phaseImg1} src='./phase4.png' alt=''/>
<Zoom delay={500} className={styles.phaseImg2}>
<img  src='./phase4Obj.png' alt=''/>
</Zoom>
</div>
</Fade>
</div>



<div className={styles.phaseBox1}>
<Fade style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}} direction='right'>

<div className={styles.phaseImages}>
<img className={styles.phaseImg1} src='./phase5.png' alt=''/>
<Zoom delay={500} className={styles.phaseImg2}>
<img  src='./phase5Obj.png' alt=''/>
</Zoom>
</div>
<div className={styles.phaseContent}>
    <div className={styles.phaseBoxTitle}>
    Winny: A Gateway to More:

    </div>
    <div className={styles.phaseBoxContent}>
    Unlocking the Potential of Winny Tokens: Phase 2 will unleash the full power of Winny tokens. Use them for in-app purchases, exciting wagers, and exclusive features, transforming them into your digital currency for a truly rewarding gaming experience.
 
        <br></br>
    <br></br>
    Evolving Gameplay and Community: We're committed to keeping things fresh and thrilling. New hypercasual games will be added regularly, and existing ones will be constantly refined. Stay tuned for an ever-expanding universe of challenges and fun!   
                   
    </div>
<img className={styles.el1} src='./el1.png' alt=''/>

</div>
</Fade>
</div>












        </div>


        </div>
        
    </div>
  )
}
