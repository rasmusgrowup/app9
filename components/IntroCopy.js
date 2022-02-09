import css from '../styles/intro.module.scss'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitText from '../hooks/useSplit.js'

export default function Intro() {
  const linesRef = useRef(null);
  const smallLinesRef = useRef(null);
  const subheroRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef/100);
    const vw = (coef) => window.innerWidth * (coef/100);

    const split = new SplitText(linesRef.current, {
      type: 'lines',
      linesClass: `${css.line}`,
    });

    const smallSplit = new SplitText(smallLinesRef.current, {
      type: 'lines',
      linesClass: `${css.line}`,
    });

    split.lines.forEach((line) => {
      gsap.set(line, {opacity: 0, y: 50})
      gsap.to(line, {
        ease: 'Power3.easeOut',
        duration: 3,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: line,
          start: '-=50 ' + vh(90),
          scrub: true,
        }
      });
    });

    smallSplit.lines.forEach((smallLine) => {
      gsap.set(smallLine, {opacity: 0, y: 50})
      gsap.to(smallLine, {
        ease: 'Power3.easeOut',
        delay: 0.5,
        duration: 3,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: smallLine,
          start: '-=50 ' + vh(90),
          scrub: true,
        }
      })
    });
  }, [])

  return (
    <>
      <section className={css.subHero} ref={subheroRef}>
        <h1 className={css.lines} ref={linesRef}>
          Vi er et lille nærværende designteam med kontor i hjertet
          <span className={css.ivyPrestoItalic}>af Odense</span>
        </h1>
        <div className={css.subHeroText}>
          <p className={css.pLines} ref={smallLinesRef}>Vi hjælper start ups og etablerede virksomheder med deres branding, hjemmesider, netbutikker og sociale medier. Vi gør os umage i vores daglige arbejde, så vores kunder kan læne sig tilbage, og vide, at de er i trygge hænder.<br/><br/>Foruden at levere responsive og professionelle hjemmesider og netbutikker, udvikler vi unikke visuelle identiteter, skaber spændende billede- og videomaterialer, og opfindsom kommunikation.</p>
        </div>
      </section>
    </>
  )
}
