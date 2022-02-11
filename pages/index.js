import Image from 'next/image'
import Link from 'next/link'
import css from '../styles/index.module.scss'

import Intro from '../components/Intro'
import Cases from '../components/Cases'
import Services from '../components/Services'
import References from '../components/References'
import AnimatedImage from '../components/AnimatedImage'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Home() {
  const nameRef = useRef(null);
  const heroRef = useRef(null);
  const planeRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      gsap.set(nameRef.current, { opacity: 1, yPercent: 100 })
      gsap.set(planeRef.current, { opacity: 0 })
      gsap.to(nameRef.current, {yPercent: 0, delay: 0.1, duration: 2, ease: 'Power3.easeInOut' })
      gsap.to(planeRef.current, {opacity: 1, delay: 1.5, duration: 2, ease: 'Power3.easeInOut' })
    } else {
      gsap.set(nameRef.current, { yPercent: 100, opacity: 0 })
      gsap.to(nameRef.current, { yPercent: 0, opacity: 1, duration: 1.2, ease: 'Power3.easeInOut' })
      gsap.set(planeRef.current, { opacity: 0 })
      gsap.to(planeRef.current, {opacity: 1, delay: 0, duration: 2, ease: 'Power3.easeInOut' })
    }
  }, [])

  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef/100);
    const vw = (coef) => window.innerWidth * (coef/100);

    gsap.to(nameRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        scrub: true,
      }
    })
  }, [])

  return (
    <>
      <section className={css.heroWrapper} ref={heroRef}>
        <div className={css.nameWrapper}><span className={css.name}  ref={nameRef}>Growup Studio</span></div>
        <div className={css.videoWrapper} ref={planeRef}>
          <video
            autoPlay
            muted
            loop
            playsInline
            width='100%'
            height='100%'
            alt='Growup Studio showreel'
            style={{ objectFit: 'cover' }}
            >
            <source src={'/OrganicBar.mp4'} type='video/mp4' />
          </video>
        </div>
        <div className={css.whatWeDo}>Branding + Webdesign</div>
      </section>
      <Intro />
      <Cases />
      <Services />
      <References />
    </>
  )
}
