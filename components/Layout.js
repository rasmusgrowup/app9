import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  useEffect (() => {
      if (window.sessionStorage.getItem("firstLoadDone") === null) {
        window.sessionStorage.setItem("firstLoadDone", 1)
      } else {}
    }, [])

  return (
    <>
      <Header />
      <Menu/>
      <main className='main'>
        {children}
      </main>
      <Footer />
    </>
  )
}
