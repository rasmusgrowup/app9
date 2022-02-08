import Image from 'next/image'
import css from '../styles/header.module.scss'
import Arrow from '../public/linkArrow.svg'

import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';
import useScrollListener from '../hooks/useScroll'

export default function Contact({ down }) {
  const ref= useRef(null);

  return (
    <>
      <div className={css.contactWrapper} ref={ref}>
        <ul className={`${css.contact} ${down == true ? `${css.hideContact}` : ''}`} down={down}>
          <span>Kontakt os</span>
          <Image src={Arrow} />
        </ul>
      </div>
    </>
  )
}
