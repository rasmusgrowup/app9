import Image from 'next/image'
import Link from 'next/link'
import css from '../styles/services.module.scss'
import Arrow from '../public/linkArrow.svg'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Services() {
  const serviceRef = useRef(null);
  const a = gsap.utils.selector(serviceRef);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef/100);
    const vw = (coef) => window.innerWidth * (coef/100);

    var scrollService = gsap.utils.toArray('.service');
    scrollService.forEach((service) => {
      gsap.set(service, {opacity: 0, y: 50})
      gsap.to(service, {
        ease: 'Power3.easeOut',
        delay: 0.5,
        duration: 3,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: service,
          start: '-=50 ' + vh(90),
          scrub: true
        }
      });
    });
  }, [])

  return(
    <>
      <section className={css.services} ref={serviceRef}>
        <h2 className='service'>Vi leverer flg. services</h2>
        <ul className={css.list}>
          <li className='service'><Link href='/'><a><span>Art Direction</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
          <li className='service'><Link href='/'><a><span>Branding</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
          <li className='service'><Link href='/'><a><span>Hjemmesider</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
          <li className='service'><Link href='/'><a><span>Shopify</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
          <li className='service' style={{ display: 'none' }}><Link href='/'><a><span>SEO</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
          <li className='service'><Link href='/'><a><span>Visuelt design</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
        </ul>
      </section>
    </>
  )
}
