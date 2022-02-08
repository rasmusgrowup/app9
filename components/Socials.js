import Image from 'next/image'
import Link from 'next/link'
import css from '../styles/header.module.scss'
import Arrow from '../public/linkArrow.svg'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';
import useScrollListener from '../hooks/useScroll'

export default function Socials({ down }) {
  const ref= useRef(null);

  return (
    <>
    <div className={css.socialsWrapper} ref={ref}>
      <ul className={`${css.socialsLink} ${down == true ? `${css.hideSocials}` : ''}`} down={down}>
        <li><Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><span>Behance</span><Image src={Arrow} /></a></Link></li>
        <li><Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><span>Instagram</span><Image src={Arrow} /></a></Link></li>
        <li><Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><span>LinkedIn</span><Image src={Arrow} /></a></Link></li>
      </ul>
    </div>
    </>
  )
}
