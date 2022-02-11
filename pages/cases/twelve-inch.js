import css from '../../styles/cases.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import Arrow from '../../public/linkArrowBlack.svg'
import WebUpper from '../../public/Udsnit_Twelveinch_1.jpg'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function TwelveInch() {
  gsap.registerPlugin(ScrollTrigger);
  const entryAnim = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    entryAnim.current = gsap.timeline()
    .fromTo(titleRef.current, {
      opacity: 0,
      yPercent: 100
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: 1.2,
      ease: 'Power3.easeInOut'
    })
    .fromTo(infoRef.current, {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 2,
      ease: 'Power3.easeInOut'
    }, '<')
    .fromTo(heroRef.current, {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'Power3.easeInOut'
      }, '<');
  }, [])

  return (
    <>
      <section className={css.page}>
        <div className={css.upper}>
          <div className={css.titleWrapper}><h1 className={`${css.twelveInchTitel} ${css.pageTitel}`} ref={titleRef}>Twelve Inch</h1></div>
          <div className={css.infoBox} ref={infoRef}>
            <div className={css.firstColumn}>
              <ul className={css.ansvar}>
                <li>Branding</li>
                <li>Prototype Design</li>
                <li>Responsivt Webdesign</li>
                <li>Visuelle Guidelines</li>
              </ul>
              <ul>
                <li>Klient: Daniel Wagner</li>
                <li><Link href='https://danielwagner.dk'><a className={css.webLink}><span>Besøg siden</span><Image src={Arrow} width='9' height='9' /></a></Link></li>
              </ul>
            </div>
            <div className={css.lastColumn}>
              <p>Inspirationen til vores visuelle aftryk skal findes i mode- og møbelbranchen. Vi respekterer og elsker de typografiske spilleregler, klassiske layouts og grids og godt gammeldags design — vi forsøger dog at modernisere disse, så vi kan levere fantastiske brugeroplevelser, og hjælpe jeres virksomhed med at vokse sig større.</p>
            </div>
          </div>
        </div>
        <div className={css.content} ref={heroRef}>
          <div className={css.webShot}><Image src={WebUpper} layout='responsive'/></div>
        </div>
      </section>
    </>
  )
}
