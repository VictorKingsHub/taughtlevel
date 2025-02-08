import React from 'react'
import styles from "./Hero.module.css"

interface Hero{
  title: string,
  desc: string
}

const WhoWeAreHero = ({title, desc } : Hero) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1> {title} </h1>
      </div>
      <div className={styles.desc}>
        <p> {desc} </p>
      </div>
    </div>
  )
}

export default WhoWeAreHero
