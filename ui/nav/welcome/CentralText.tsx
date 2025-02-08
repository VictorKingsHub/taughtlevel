import React from 'react'
import styled from "./CentralText.module.css"
import Link from 'next/link'

interface TextColumnComponentProps {
    more?: string;
    title: string;
    icon?: any;
    description: string;
    link?: string;
    text?: string;
}

const CentralText = ( { more, title, icon, description, link, text }: TextColumnComponentProps) => {
    return (
        <div className={styled.container}>
            <div className={styled.title}> {title}  </div>
            <div className={styled.sub}>
                <p className='text-red-700'> {description} </p>
            </div>
            <div className={styled.button}>
                <Link href={"/"} className='flex flex-row justify-center text-center items-center gap-12' > <p> {more} </p> {icon} </Link>
            </div>
        </div>
    )
}

export default CentralText
