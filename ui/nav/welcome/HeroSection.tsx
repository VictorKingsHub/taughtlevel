import { Button } from '@/components/ui/button'
import React from 'react'
import styles from "./HeroSection.module.css"
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className={styles.container}>

      <div className={styles.left}>
        <div className={styles.brand}>
          <h1>TAUGHTLEVEL 2024</h1>
        </div>
        <div className={styles.caption}>
          <h1>Developing Human With Skills To Reward The Future</h1>
        </div>
        <div className={styles.desc}>
          <p>Unleash the world&apos;s most powerful human building capacity, reward the future with a profitable accolades of support expertise and business building solutions</p>
        </div>
        <div className={styles.buttons}>
          <Link href="#" className={styles.join}>Join The Academy</Link>
          <Link href="#" className={styles.get}>Request Appointment</Link>
        </div>
      </div>

    </div>
  )
}

export default HeroSection
