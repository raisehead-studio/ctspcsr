import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import Head from "next/head";

import style from "./layout.module.scss";
import "../styles/globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  return (
    <>
      <Head>
        <title>南部科學園區管理局永續發展專區</title>
        <meta name="description" content="南部科學園區管理局永續發展專區" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Header />
      {pathname === "/performance/" && <div className={style.stat}></div>}
      <main className={style.main}>
        <Component {...pageProps} />
        <Footer />
        <div className="backdrop"></div>
      </main>
    </>
  );
}

export default MyApp;
