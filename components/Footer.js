import Link from 'next/link'

import css from '../styles/footer.module.scss'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function() {
  const footerRef = useRef(null);

  useEffect(() => {
    var scrollEl = gsap.utils.toArray('.item');
    scrollEl.forEach((scroll) => {
      gsap.from(scroll, {
        y: 25,
        opacity: 0,
        scrollTrigger: {
          trigger: scroll,
          start: "top 90%",
          end: 'bottom bottom',
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
        </ul>
      </footer>
    </>
  )
}
