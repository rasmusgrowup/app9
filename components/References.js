import references from '../utils/references'
import css from '../styles/services.module.scss'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function References() {
  const referencesRef = useRef(null);
  const b = gsap.utils.selector(referencesRef);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef/100);
    const vw = (coef) => window.innerWidth * (coef/100);

    var scrollEl = gsap.utils.toArray('.reference');
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
          scrub: true
        }
      });
    });
  }, [])

  return(
    <>
      <section className={css.references} ref={referencesRef}>
        <h2 className='reference'>Vi leverer til flg. klienter</h2>
        <ul className={css.list}>
          {references.map(({title, year}) => (
              <li className={`${css.client} reference`} key={title}><div className={css.clientTitle}>{title}</div><span className={css.year}>{year}</span></li>
            ))}
        </ul>
      </section>
    </>
  )
}
