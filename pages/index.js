import Image from 'next/image'
import Link from 'next/link'

import css from '../styles/index.module.scss'
import Cases from '../components/Cases'
import AnimatedImage from '../components/AnimatedImage'
import Arrow from '../public/linkArrow.svg'
import references from '../utils/references'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitText from '../hooks/useSplit.js'

export default function Home() {
  const nameRef = useRef(null);
  const heroRef = useRef(null);
  const planeRef = useRef(null);
  const linesRef = useRef(null);
  const smallLinesRef = useRef(null);
  const subheroRef = useRef(null);
  const serviceRef = useRef(null);
  const referencesRef = useRef(null);
  const b = gsap.utils.selector(referencesRef);
  const a = gsap.utils.selector(serviceRef);
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      gsap.set(nameRef.current, { opacity: 1, yPercent: 100 })
      gsap.set(planeRef.current, { opacity: 0 })
      gsap.to(nameRef.current, {yPercent: 0, delay: 0.1, duration: 2, ease: 'Power3.easeInOut' })
      gsap.to(planeRef.current, {opacity: 1, delay: 1.5, duration: 2, ease: 'Power3.easeInOut' })
    } else {
      gsap.set(nameRef.current, { yPercent: 0, opacity: 1 })
      gsap.set(planeRef.current, { opacity: 1 })
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

  return (
    <>
      <section className={css.heroWrapper} ref={heroRef}>
        <div className={css.nameWrapper}><span className={css.name}  ref={nameRef}>Growup Studio</span></div>
        <div className={css.planeWrapper} ref={planeRef}><AnimatedImage /></div>
        <div className={css.whatWeDo}>Branding + Webdesign</div>
      </section>
      <section className={css.subHero} ref={subheroRef}>
        <h1 className={css.lines} ref={linesRef}>
          Vi er et lille nærværende designteam med kontor i hjertet
          <span className={css.ivyPrestoItalic}>af Odense</span>
        </h1>
        <div className={css.subHeroText}>
          <p className={css.pLines} ref={smallLinesRef}>Vi hjælper start ups og etablerede virksomheder med deres branding, hjemmesider, netbutikker og sociale medier. Vi gør os umage i vores daglige arbejde, så vores kunder kan læne sig tilbage, og vide, at de er i trygge hænder.<br/><br/>Foruden at levere responsive og professionelle hjemmesider og netbutikker, udvikler vi unikke visuelle identiteter, skaber spændende billede- og videomaterialer, og opfindsom kommunikation.</p>
        </div>
      </section>
      <Cases />
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
