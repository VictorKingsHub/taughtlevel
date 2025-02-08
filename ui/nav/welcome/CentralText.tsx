import React from 'react'
import styled from "./CentralText.module.css"
import Link from 'next/link'
import { Righteous } from 'next/font/google'
import { BiRightArrow, BiRightArrowAlt, BiRightArrowCircle } from 'react-icons/bi'

const CentralText = () => {
    return (
        <div className={styled.container}>
            <div className={styled.title}>
                <h1 className=''>Apprecible ways we save your company money and alot more resources</h1>
            </div>
            <div className={styled.sub}>
                <p>There are more.. We thought to ease you into it</p>
            </div>
            <div className={styled.button}>
                <Link href={"/"} className='flex flex-row justify-center text-center items-center gap-12' > <p> Learn More  </p> <BiRightArrowAlt /></Link>
            </div>
        </div>
    )
}

export default CentralText
