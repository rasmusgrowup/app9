import Image from 'next/image'
import Link from 'next/link'
import css from '../styles/header.module.scss'
import Arrow from '../public/linkArrow.svg'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';
import useScrollListener from '../hooks/useScroll'

export default function Socials() {
  const ref= useRef(null);
  const scroll = useScrollListener();
  const [navClassList, setNavClassList] = useState([]);

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push(`${css.hideContact}`);

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      gsap.set(ref.current, { opacity: 0, y: 50 })
      gsap.to(ref.current, {opacity: 1, y: 0, delay: 2.2, duration: 2, ease: 'Power3.easeInOut' })
    } else {
      gsap.set(ref.current, { opacity: 1, y: 0 })
    }
  }, [])

  return (
    <>
    <div className={css.socialsWrapper} ref={ref}>
      <ul className={`${css.socialsLink} ${navClassList.join(" ")}`}>
        <li><Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><span>Behance</span><Image src={Arrow} /></a></Link></li>
        <li><Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><span>Instagram</span><Image src={Arrow} /></a></Link></li>
        <li><Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><span>LinkedIn</span><Image src={Arrow} /></a></Link></li>
      </ul>
    </div>
    </>
  )
}
