"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import styles from "./HeroSection.module.css"
import Link from 'next/link'

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
        <video width="90%" height="240" autoPlay loop >
          <source src="/video3.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  )
}

export default HeroSection
