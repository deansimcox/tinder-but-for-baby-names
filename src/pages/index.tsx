import React from "react";

import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Deck from "../components/Tinder/Deck";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baby name tinder</title>
        <meta name="description" content="Matching dem baby names" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="height relative overflow-hidden">
        <Navbar />
        <Deck />
        <Content />
        <Footer />
      </div>
    </>
  );
}
