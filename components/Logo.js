import Image from 'next/image'
import css from '../styles/header.module.scss'
import Smile from '../public/smile.svg'

import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';

export default function Logo({ down }) {
  const ref= useRef(null);

  return (
    <>
      <div className={css.logoWrapper} ref={ref}>
        <div className={`${css.logoInner} ${down == true ? `${css.hideLogo}` : ''}`} down={down}>
          <span>Growup Studio <Image src={Smile} width='12' height='12' /></span>
          <span>Branding + Webdesign</span>
        </div>
      </div>
    </>
  )
}
