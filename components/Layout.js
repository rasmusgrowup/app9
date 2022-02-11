import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import css from '../styles/themes.module.scss'

export default function Layout({ children }) {
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
      if (window.sessionStorage.getItem("firstLoadDone") === null) {
        window.sessionStorage.setItem("firstLoadDone", 1)
      } else {}
    }, [])

  return (
    <>
      <Header />
      <Menu/>
      <main className={`
          ${router.pathname == '/' ? `${css.mainTheme}` : '' }
          ${router.pathname == '/cases/daniel-wagner' ? `${css.greyTheme}` : '' }
          ${router.pathname == '/cases/twelve-inch' ? `${css.sandTheme}` : '' }
        `}>
        {children}
      </main>
      <Footer />
    </>
  )
}
