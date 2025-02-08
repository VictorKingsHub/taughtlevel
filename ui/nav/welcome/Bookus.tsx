import Image from 'next/image'
import React from 'react'
import styles from "./Bookus.module.css"

const Bookus = () => {
    return (
        <div className={styles.container}>

            <div className={styles.first}>
                <h1 className={styles.topic}>You Derserve The Best</h1>
                <h3 className="text-xl">Get connected in just a click</h3>
                <p> With a well structured service analysis and success orientation expertise experience, taughtlevel technologies ofers you the best of all </p>
            </div>

            <div className={styles.second}>
                <Image src="/photo1.png" width={400} height={500} alt="Picture of the author" />
            </div>

        </div>
    )
}

export default Bookus
