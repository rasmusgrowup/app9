import css from '../styles/menu.module.scss'
import Link from 'next/link'
import { MenuContext } from "../hooks/menuContext";
import React, { useContext, useEffect, useRef } from 'react'
import { gsap } from 'gsap';

export default function Menu() {
  const drawerRef = useRef(null);
  const { toggle, toggleFunction} = useContext(MenuContext);
  const tl = useRef();

  useEffect(() => {
    gsap.set(drawerRef.current, {xPercent: 0})
    tl.current = gsap.timeline()
      .to(drawerRef.current, {
        xPercent: -100,
        duration: 0.5,
        ease: 'Power3.easeInOut'
      })
  }, [])

  useEffect(() => {
    if (toggle === true) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [toggle])

  return(
    <>
      <div className={css.drawer} ref={drawerRef}>
        <div className={css.menuButton} onClick={toggleFunction}>Luk</div>
        <span className={css.title}>Læs mere om</span>
        <ul className={css.servicesList}>
          <li><Link href='/'><a>Art Direction</a></Link></li>
          <li><Link href='/'><a>Branding</a></Link></li>
          <li><Link href='/'><a>React hjemmesider</a></Link></li>
          <li><Link href='/'><a>Shopify netbutikker</a></Link></li>
          <li><Link href='/'><a>Søgemaskineoptimering</a></Link></li>
          <li><Link href='/'><a>Visuelt design</a></Link></li>
        </ul>
        <span className={css.title}>Se også</span>
        <ul className={css.moreList}>
          <li><Link href='/'><a>Opslagstavlen</a></Link></li>
          <li><Link href='/'><a>Vores cases</a></Link></li>
          <li><Link href='/'><a>Forsiden</a></Link></li>
        </ul>
        <div className={css.contact}>
          <Link href='tel:+4531623733'><a>+45 31 62 37 33</a></Link>
          <Link href='mailto:hello@growupstudio.dk'><a className={css.mail}>hello@growupstudio.dk</a></Link>
        </div>
      </div>
    </>
  )
}
