import { Button } from '@/components/ui/button'
import React from 'react'
import styles from "./HeroSection.module.css"
import Link from 'next/link'
// import video from "../../../public/video1.mp4"
const HeroSection = () => {
  return (
    <div className={styles.container}>

      <div className={styles.text}>
        <div className={styles.brand}>
          <h1>TAUGHTLEVEL 2024</h1>
        </div>
        <div className={styles.caption}>
          <h1>Developing Human With Potentials To Reward The Future With Passion</h1>
        </div>
        <div className={styles.desc}>
          <p>Unleash the world&apos;s most powerful human building capacity, reward the future with profitable accolades to support expertise and business building solutions</p>
        </div>
        <div className={styles.buttons}>
          <Link href="#" className={styles.get}>Request Appointment</Link>
          <Link href="#" className={styles.join}>Join The Academy</Link>
        </div>
      </div>

      <div className={styles.image}>
        {/* <Image  width="" height="" href=""/> */}


        <video width="320" height="240" controls>
          {/* <source src="/videos/myvideo.mp4" type="video/mp4" /> */}
          <source src="/../../public/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  )
}

export default HeroSection
