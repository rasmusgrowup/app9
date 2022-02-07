import '../styles/globals.css'
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
