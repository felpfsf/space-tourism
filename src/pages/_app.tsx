import { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbbar } from '../components/Navbar'
import {AnimatePresence} from 'framer-motion'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='keywords'
          content='ui, ux, design, webdev, webdevelopment, nextjs, frontendmentor, space, tourism, nasa'
        />
        <title>Space Tourism</title>
      </Head>
      <AnimatePresence initial={false}>
        <Navbbar />
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}
