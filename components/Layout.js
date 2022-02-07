import Logo from '../components/Logo'
import MenuButton from '../components/MenuButton'
import Socials from '../components/Socials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import headerStyles from '../styles/header.module.scss'
import CustomCursor from '../components/CustomCursor'
import { isMobile, CustomView } from 'react-device-detect'

export default function Layout({ children }) {
  useEffect (() => {
      if (window.sessionStorage.getItem("firstLoadDone") === null) {
        window.sessionStorage.setItem("firstLoadDone", 1)
      } else {}
    }, [])

  return (
    <>
      <header className={headerStyles.header}>
        <Logo />
        <MenuButton />
        <Socials />
        <Contact />
      </header>
      <main className='main'>
        <CustomView condition={!isMobile}>
        </CustomView>
        {children}
        <Footer />
      </main>
    </>
  )
}
