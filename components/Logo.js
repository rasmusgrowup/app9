import Image from 'next/image'
import Link from 'next/link'
import css from '../styles/header.module.scss'
import Smile from '../public/smile.svg'

import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';

export default function Logo({ down }) {
  const ref= useRef(null);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      gsap.set(ref.current, { opacity: 0, y: -50 })
      gsap.to(ref.current, {opacity: 1, y: 0, delay: 2, duration: 2, ease: 'Power3.easeInOut' })
    } else {
      gsap.set(ref.current, { opacity: 1, y: 0 })
    }
  }, [])

  return (
    <>
      <div className={css.logoWrapper} ref={ref}>
        <Link href='/'><a>
        <div className={`${css.logoInner} ${down == true ? `${css.hideLogo}` : ''}`} down={down}>
          <span>Growup Studio <Image src={Smile} width='12' height='12' alt='Growup Studio Favicon'/></span>
          <span>Branding + Webdesign</span>
        </div>
        </a></Link>
      </div>
    </>
  )
}
