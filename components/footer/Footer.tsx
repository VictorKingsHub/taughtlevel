import React from 'react'
import styles from "./Footer.module.css"
import { NavItems } from '@/ui/nav/navItems'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h3 className={styles.head}>About</h3>
        <p>Surpassing records with capacities harnessed from the potentially reserved capacities</p>
      </div>

      <div className={styles.menu}>
        <h3 className={styles.head}>Quick Links</h3>
        <div>
          {NavItems.map(item => {
            return (
                <Link key={item.id} href={item.href} className={styles.menuItem}> {item.label} </Link>
            )
          })}
        </div>
      </div>
      <div className={styles.office}>
        <h3 className={styles.head}> Office</h3>
        <p>Agalaba Street Office</p>
        <p>+2348167542553</p>
      </div>
      <div className={styles.appoint}>
        <h3 className={styles.head}>Appoint</h3>
        <p>Book an appointment</p>
        <Link className='mt-2 bg-orange-500 px-2 py-1 font-semibold rounded-md' href="mailto:someone@example.com" >Email us today</Link>
      </div>
    </div>
  )
}

export default Footer
