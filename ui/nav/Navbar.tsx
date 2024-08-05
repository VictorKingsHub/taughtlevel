"use client"
import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { CiMenuBurger } from 'react-icons/ci'
import { FaTimes } from 'react-icons/fa'
// import { NavItems } from "../../ui/nav/navItems"
import Mobile from './Mobile'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { NavItems } from './navItems'


const Navbar = () => {

  const [open, setOpen] = useState(true)
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.logo}> Logo </div>
      <div className={styles.menu}>

        <div className={styles.largeNav}>
          {NavItems.map(item => {
            return (
              <Link href={item.href} className={`${item.href === pathname ? styles.active : styles.inactive} ${styles.navBoth}`}
              >{item.label}</Link>
            )
          })}
        </div>



        {/* <div className={`${open ? styles.close : styles.open}`}>
          <Mobile />
        </div> */}

        <DropdownMenu>
          <DropdownMenuTrigger>

            <div className={styles.navMenu} onClick={() => setOpen(!open)}>
              {open ?
                <CiMenuBurger /> :

                <FaTimes />
              }
            </div>

          </DropdownMenuTrigger>
          <DropdownMenuContent className={styles.mobile_body}>
            <DropdownMenuLabel className={styles.mobile_logo} >Logo</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className={styles.mobile_container}>
              {NavItems.map(item => {
                return (
                  <Link className={`${item.href === pathname ? styles.mobile_active : styles.mobile_inactive} ${styles.mobile_link}`} href={item.href}> {item.label} </Link>
                )
              })}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  )
}

export default Navbar
