import Logo from '../components/Logo'
import MenuButton from '../components/MenuButton'
import Socials from '../components/Socials'
import Contact from '../components/Contact'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import headerStyles from '../styles/header.module.scss'
import CustomCursor from '../components/CustomCursor'
import { isMobile, CustomView } from 'react-device-detect'
import useScrollListener from '../hooks/useScroll'

export default function Layout({ children }) {
  const [scrollDown, setScrollDown] = useState(false);
  const scroll = useScrollListener();

  useEffect(() => {
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      setScrollDown(true)
    } else {
      setScrollDown(false)
    }
  }, [scroll.y, scroll.lastY]);

  useEffect (() => {
      if (window.sessionStorage.getItem("firstLoadDone") === null) {
        window.sessionStorage.setItem("firstLoadDone", 1)
      } else {}
    }, [])

  return (
    <>
      <header className={headerStyles.header}>
        <Logo down={scrollDown}/>
        <MenuButton down={scrollDown}/>
        <Socials down={scrollDown}/>
        <Contact down={scrollDown}/>
      </header>
      <Menu />
      <main className='main'>
        <CustomView condition={!isMobile}>
        </CustomView>
        {children}
        <Footer />
      </main>
    </>
  )
}
