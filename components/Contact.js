import Image from 'next/image'
import css from '../styles/header.module.scss'
import Arrow from '../public/linkArrow.svg'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';

export default function Contact() {
  const ref= useRef(null);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      gsap.set(ref.current, { opacity: 0, y: 50 })
      gsap.to(ref.current, {opacity: 1, y: 0, delay: 2.2, duration: 2, ease: 'Power3.easeInOut' })
    } else {
      gsap.set(ref.current, { opacity: 1, y: 0 })
    }
  }, [])
  return (
    <>
      <div className={css.contactWrapper} ref={ref}>
        <ul className={css.contact}>
          <span>Kontakt os</span>
          <Image src={Arrow} />
        </ul>
      </div>
    </>
  )
}
