import Image from 'next/image'
import Link from 'next/link'

import css from '../styles/cases.module.scss'
import Daniel from '../public/Daniel_wagner_forward.jpg'
import Pral from '../public/pral.jpg'
import Organic from '../public/Udsnit_Organic.jpg'
import TwelveInch from '../public/Udsnit_Twelveinch_3.jpg'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Cases() {
  const casesRef = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef/100);
    const vw = (coef) => window.innerWidth * (coef/100);

    gsap.set(title.current, {opacity: 0, y: 50})
    gsap.to(title.current, {
      ease: 'Power3.easeOut',
      delay: 0.5,
      duration: 3,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: title.current,
        start: '-=50 ' + vh(90),
        end: 'center center',
        scrub: true
      }
    });

    var scrollEl = gsap.utils.toArray('.case');
    scrollEl.forEach((scroll) => {
      gsap.set(scroll, {opacity: 0, y: 50})
      gsap.to(scroll, {
        ease: 'Power3.easeOut',
        delay: 0.5,
        duration: 3,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: scroll,
          start: '-=50 ' + vh(90),
          end: 'center center',
          scrub: true
        }
      });
    });
  }, [])

  return (
    <>
      <section className={css.cases}>
        <h2 className={css.title} ref={title}>Udvalgte cases</h2>
        <div className={`${css.row} ${css.first}`}>
          <Link href='/'>
            <a className={`${css.case} ${css.wide} case`}>
              <div className={css.image}><Image src={Daniel} layout='responsive' objectFit='cover' objectPosition='center' alt='Daniel Wagner'/></div>
              <div className={css.info}>
                <p>
                  Branding + <br />
                  Responsivt Webdesign
                </p>
                <span>/ 1</span>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a className={`${css.case} ${css.tall} case`}>
              <div className={css.image}><Image src={TwelveInch} layout='responsive' objectFit='cover' objectPosition='center' alt='Twelve Inch'/></div>
              <div className={css.info}>
                <p>
                  Art Direction + <br />
                  Shopify Webshop
                </p>
                <span>/ 2</span>
              </div>
            </a>
          </Link>
        </div>
        <div className={`${css.row} ${css.second}`}>
          <Link href='/'>
            <a className={`${css.case} ${css.tall} case`}>
              <div className={css.image}><Image src={Organic} layout='responsive' objectFit='cover' objectPosition='center' alt='The Organic Crave Company'/></div>
              <div className={css.info}>
                <p>
                  Art Direction + <br />
                  Custom Shopify Webshop
                </p>
                <span>/ 2</span>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a className={`${css.case} ${css.wide} case`}>
              <div className={css.image}><Image src={Pral} layout='responsive' objectFit='cover' objectPosition='center' alt='Pral'/></div>
              <div className={css.info}>
                <p>
                  Shopify Webshop
                </p>
                <span>/ 2</span>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}
