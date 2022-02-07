import Image from 'next/image'
import Link from 'next/link'

import css from '../styles/index.module.scss'
import Hero from '../public/Udsnit_Organic.jpg'
import AnimatedImage from '../components/AnimatedImage'
import Arrow from '../public/linkArrow.svg'
import references from '../utils/references'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitText from '../hooks/useSplit.js'

export default function Home() {
  const ref= useRef(null);
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
      gsap.set(ref.current, { opacity: 1, yPercent: 100 })
      gsap.set(planeRef.current, { opacity: 0 })
      gsap.to(ref.current, {yPercent: 0, delay: 1.5, duration: 2, ease: 'Power3.easeInOut' })
      gsap.to(planeRef.current, {opacity: 1, delay: 0.1, duration: 2, ease: 'Power3.easeInOut' })
    } else {
      gsap.set(ref.current, { yPercent: 0, opacity: 1 })
      gsap.set(planeRef.current, { opacity: 1 })
    }
  }, [])

  useEffect(() => {
    gsap.to(ref.current, {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ref.current,
        start: 'center center',
        scrub: true
      }
    })

    const split = new SplitText(linesRef.current, {
      type: 'lines',
      linesClass: 'line',
    });

    const smallSplit = new SplitText(smallLinesRef.current, {
      type: 'lines',
      linesClass: 'line',
    });

    split.lines.forEach((line) => {
      gsap.from(line, {
        ease: 'Power3.easeOut',
        duration: 3,
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: line,
          start: 'top 90%',
          scrub: true,
        }
      });
    });

    smallSplit.lines.forEach((smallLine) => {
      gsap.from(smallLine, {
        ease: 'Power3.easeOut',
        delay: 0.5,
        duration: 3,
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: smallLine,
          start: 'top 90%',
          scrub: true,
        }
      })
    });

    var scrollService = gsap.utils.toArray('.service');
    scrollService.forEach((service) => {
      gsap.from(service, {
        ease: 'Power3.easeOut',
        delay: 0.5,
        duration: 3,
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: service,
          start: "top 90%",
          scrub: true
        }
      });
    });

    var scrollEl = gsap.utils.toArray('.reference');
    scrollEl.forEach((scroll) => {
      gsap.from(scroll, {
        ease: 'Power3.easeOut',
        delay: 0.5,
        duration: 3,
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: scroll,
          start: "top 90%",
          scrub: true
        }
      });
    });
  }, [])

  return (
    <>
      <section className={css.heroWrapper}>
        <div className={css.nameWrapper}><span className={css.name}  ref={ref}>Growup Studio</span></div>
        <div className={css.planeWrapper} ref={planeRef}><AnimatedImage /></div>
        <div className={css.whatWeDo}>Branding + Webdesign</div>
      </section>
      <section className={css.subHero} ref={subheroRef}>
        <h1 className={css.lines} ref={linesRef}>
          Vi er et lille nærværende designteam med kontor i hjertet <span className='ivyPrestoItalic'>af Odense</span>
        </h1>
        <div className={css.subHeroText}>
          <p className={css.pLines} ref={smallLinesRef}>Foruden at levere responsive og søgemaskineoptimerede hjemmesider og netbutikker, udvikler vi unikke visuelle identiteter, skaber spændende billede- og videoindhold, og opfindsom kommunikation.<br/><br/>Inspirationen til vores visuelle aftryk skal findes i mode- og møbelbranchen</p>
        </div>
      </section>
      <section className={css.services} ref={serviceRef}>
        <h2 className='service'>Vi leverer flg. services</h2>
        <ul className={css.list}>
          <li className='service'><Link href='/'><a><span>Art Direction</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
          <li className='service'><Link href='/'><a><span>Branding</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
          <li className='service'><Link href='/'><a><span>Hjemmesider</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
          <li className='service'><Link href='/'><a><span>Shopify</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
          <li className='service'><Link href='/'><a><span>SEO</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
          <li className='service'><Link href='/'><a><span>Visuelt design</span><Image src={Arrow} width='12' height='12' /></a></Link></li>
        </ul>
      </section>
      <section className={css.references} ref={referencesRef}>
        <h2 className='reference'>Vi har leveret til flg. klienter</h2>
        <ul className={css.list}>
          {references.map(({title, year}) => (
              <li className={`${css.client} reference`} key={title}><div className={css.clientTitle}>{title}</div><span className={css.year}>{year}</span></li>
            ))}
        </ul>
      </section>
    </>
  )
}