import Image from 'next/image'
import Link from 'next/link'
import css from '../styles/header.module.scss'
import Smile from '../public/smile.svg'
import Arrow from '../public/linkArrow.svg'

import React, { useEffect, useState, useRef, useContext } from 'react'
import { gsap } from 'gsap';
import useScrollListener from '../hooks/useScroll'
import { MenuContext } from "../hooks/menuContext";

export default function Header() {
  const logoRef= useRef(null);
  const buttonRef = useRef(null);
  const socialsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      gsap.set(logoRef.current, { opacity: 0, y: -50 })
      gsap.set(buttonRef.current, { opacity: 0, y: -50 })
      gsap.set(socialsRef.current, { opacity: 0, y: -50 })
      gsap.set(contactRef.current, { opacity: 0, y: -50 })
      gsap.to(logoRef.current, {opacity: 1, y: 0, delay: 2, duration: 2, ease: 'Power3.easeInOut' })
      gsap.to(buttonRef.current, {opacity: 1, y: 0, delay: 2, duration: 2, ease: 'Power3.easeInOut' })
      gsap.to(socialsRef.current, {opacity: 1, y: 0, delay: 2, duration: 2, ease: 'Power3.easeInOut' })
      gsap.to(contactRef.current, {opacity: 1, y: 0, delay: 2, duration: 2, ease: 'Power3.easeInOut' })
    } else {
      gsap.set(logoRef.current, { opacity: 1, y: 0 })
      gsap.set(buttonRef.current, { opacity: 1, y: 0 })
      gsap.set(socialsRef.current, { opacity: 1, y: 0 })
      gsap.set(contactRef.current, { opacity: 1, y: 0 })
    }
  }, [])

  const scroll = useScrollListener();
  const [navClassList, setNavClassList] = useState([]);

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push(`${css.hideOnScroll}`);

    setNavClassList(_classList);

  }, [scroll.y]);

  const { toggle, toggleFunction} = useContext(MenuContext);

  return (
    <>
      <header className={css.header}>
        <div className={css.logoWrapper} ref={logoRef}>
          <div className={`${css.logoInner} ${navClassList.join(" ")}`}>
            <span>Growup Studio <Image src={Smile} width='12' height='12' alt='Growup Studio Favicon'/></span>
            <span>Branding + Webdesign</span>
          </div>
        </div>
        <div className={css.menuButton} ref={buttonRef} onClick={toggleFunction}>Menu</div>
        <div className={css.socialsWrapper} ref={socialsRef}>
          <ul className={`${css.socialsLink} ${navClassList.join(" ")}`}>
            <li><Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><span>Behance</span><Image src={Arrow} alt='Arrow icon'/></a></Link></li>
            <li><Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><span>Instagram</span><Image src={Arrow} alt='Arrow icon'/></a></Link></li>
            <li><Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><span>LinkedIn</span><Image src={Arrow} alt='Arrow icon'/></a></Link></li>
          </ul>
        </div>
        <div className={css.contactWrapper} ref={contactRef}>
          <ul className={`${css.contact} ${navClassList.join(" ")}`}>
            <span>Kontakt os</span>
            <Image src={Arrow} alt='Arrow icon'/>
          </ul>
        </div>
      </header>
    </>
  )
}
