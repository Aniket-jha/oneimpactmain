import React,{useEffect} from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const router= useRouter()
   useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('984626049296665') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
  return (
    <>
      <Head>
        <title>One Impact Agency</title>
        <link rel="icon" href="/img/favicon.ico" />
         <meta
  name="description"
  content="Building 360 degree digital marketing solutions to help your brand achieve that ONE big bang IMPACT! "
/>
      </Head>
      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
