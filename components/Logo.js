import Image from 'next/image'
import css from '../styles/header.module.scss'
import Smile from '../public/smile.svg'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';

export default function Logo() {
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
        <div className={css.logoInner}>
          <span>Growup Studio <Image src={Smile} width='12' height='12' /></span>
          <span>Branding + Webdesign</span>
        </div>
      </div>
    </>
  )
}
