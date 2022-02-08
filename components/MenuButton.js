import css from '../styles/header.module.scss'
import { MenuContext } from "../hooks/menuContext";
import React, { useEffect, useRef, useContext } from 'react'
import { gsap } from 'gsap';

export default function MenuButton() {
  const ref= useRef(null);
  const { toggle, toggleFunction} = useContext(MenuContext);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      gsap.set(ref.current, { opacity: 0, y: -50 })
      gsap.to(ref.current, {opacity: 1, y: 0, delay: 2, duration: 2, ease: 'Power3.easeInOut' })
    } else {
      gsap.set(ref.current, { opacity: 1, y: 0 })
    }
  }, [])

  return (
    <>
      <div className={css.menuButton} ref={ref} onClick={toggleFunction}>Menu</div>
    </>
  )
}
