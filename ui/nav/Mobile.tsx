import React from 'react'
import { NavItems } from './navItems'
import Link from 'next/link'
import styles from "./Mobile.module.css"
import { usePathname } from 'next/navigation'

const Mobile = () => {
    const pathname = usePathname()
    return (
        <div className={styles.container}>
            {NavItems.map(item => {
                return (
                    <Link className={`${item.href === pathname ? styles.active : styles.inactive} ${styles.link}`} href={item.href}> {item.label} </Link>
                )
            })}
        </div>
    )
}

export default Mobile
