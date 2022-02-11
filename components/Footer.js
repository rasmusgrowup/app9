import Link from 'next/link'
import React from 'react'
import css from '../styles/footer.module.scss'
import theme from '../styles/themes.module.scss'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Footer() {
  const footerRef = useRef(null);
  const router = useRouter()
  const animation = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef/100);
    const vw = (coef) => window.innerWidth * (coef/100);

    animation.current = gsap.utils.toArray('.item');
    animation.current.forEach((scroll) => {
      gsap.fromTo(scroll,
      {
        opacity: 0,
        y: 50,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'Power3.easeOut',
        scrollTrigger: {
          trigger: scroll,
          start: '-=50 ' + vh(90),
          end: 'bottom ' + vh(90),
          endTrigger: footerRef.current,
          scrub: true,
        }
      });
    });

    console.log(scroll, ScrollTrigger.getAll().length);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, [router])

  return (
    <>
      <footer ref={footerRef} className={`
          ${css.main}
          ${router.pathname == '/' ? `${theme.mainTheme}` : '' }
          ${router.pathname == '/cases/daniel-wagner' ? `${theme.greyTheme}` : '' }
          ${router.pathname == '/cases/twelve-inch' ? `${theme.sandTheme}` : '' }
        `}>
        <div className={css.inner}>
          <h2 className={`${css.title} item`}>Kontakt os</h2>
          <ul className={css.list}>
            <li className='item'><Link href='tel:+4531623733'><a>+45 31 62 37 33</a></Link></li>
            <li className='item'><Link href='mailto:hello@growupstudio.dk'><a className={css.mail}>hello@growupstudio.dk</a></Link></li>
            <li className={`${css.address} item`}>Havnegade 100L, Odense C</li>
            <li className={`${css.copyright} item`}>©{new Date().getFullYear()} Growup Aps</li>
            <li className={`${css.cvr} item`}>CVR 39852640</li>
          </ul>
        </div>
      </footer>
    </>
  )
}
