import React from 'react'
import styles from "./Touch.module.css"
import Image from 'next/image'

const Touch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={"/photo1.png"} width={120} height={120} alt='Ref Image' />
      </div>

      <div className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero autem facere in suscipit iste praesentium cum. Neque sed tempora, consequuntur deleniti nam nesciunt illum odit temporibus fugit id molestias ut!
      </div>
    </div>
  )
}

export default Touch
