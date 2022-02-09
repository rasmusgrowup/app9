import '../styles/globals.css'
import Layout from '../components/Layout'
import { MenuProvider } from "../hooks/menuContext";

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuProvider>
  )
}

export default MyApp
