'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`} >
        <Image id='me' src={imgSrc} fill priority alt=''/>
    </div>
  )
}

export default DevImg