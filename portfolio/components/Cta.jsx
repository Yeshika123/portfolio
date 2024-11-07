import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-center mb-8" >Do i fit your requirements? <br/> Click to contact me</h2>
                <div className="flex flex-col md:flex-row">
                <div className="container flex flex-col xl:flex-row items-center md:justify-between">
                <div className="mb-10">
                  <Image className="mb-5" height={200} width={400} src={'/cta/Contact us.png'} />
                </div>
                <Link href='/contact' ><Button>Contact Me</Button></Link>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta