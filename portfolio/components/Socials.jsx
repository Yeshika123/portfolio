import React from 'react'

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstallFill,
} from 'react-icons/ri'

import Link from 'next/link'
import { GitHubLink, LinkedInLink, YoutubeLink } from '@/Data/Links'

const icons=[
  {
    path:LinkedInLink,
    name:<RiLinkedinFill/>
  },
  {
    path:GitHubLink,
    name:<RiGithubFill/>
  },
  {
    path:YoutubeLink,
    name:<RiYoutubeFill/>
  }
]

const Socials = ({containerStyles , iconStyles}) => {
  return (
    <div className={`${containerStyles}`} >

    {icons.map((item,index)=>{
      return <Link href={item.path} key={index} target='_blank' >
        <div className={`${iconStyles}`} >{item.name}</div>
      </Link>
    })}

    </div>
  )
}

export default Socials