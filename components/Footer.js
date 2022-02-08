import Link from 'next/link'
import React from 'react'
import css from '../styles/footer.module.scss'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef/100);
    const vw = (coef) => window.innerWidth * (coef/100);

    var scrollEl = gsap.utils.toArray('.item');
    scrollEl.forEach((scroll) => {
      gsap.set(scroll, {opacity: 0, y: 25})
      gsap.to(scroll, {
        y: 0,
        opacity: 1,
        ease: 'Power3.easeOut',
        scrollTrigger: {
          trigger: scroll,
          start: '-=50 ' + vh(90),
          end: 'bottom ' + vh(90),
          endTrigger: footerRef.current,
          scrub: true
        }
      });
    });
  }, [])

  return (
    <>
      <footer className={css.main} ref={footerRef}>
        <h2 className={`${css.title} item`}>Kontakt os</h2>
        <ul className={css.list}>
          <li className='item'><Link href='tel:+4531623733'><a>+45 31 62 37 33</a></Link></li>
          <li className='item'><Link href='mailto:hello@growupstudio.dk'><a className={css.mail}>hello@growupstudio.dk</a></Link></li>
          <li className={`${css.address} item`}>Havnegade 100L, Odense C</li>
          <li className={`${css.copyright} item`}>©{new Date().getFullYear()} Growup Aps</li>
          <li className={`${css.cvr} item`}>CVR 39852640</li>
        </ul>
      </footer>
    </>
  )
}
