/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import Banner from "../components/Home/Banner";
import Feature from "../components/Home/Feature";
import HomeServicesSlider from "../components/Home/HomeServicesSlider";
import HowItWorks from "../components/Home/HowItWorks";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
// import BreakdownFirst from "./Breakdown/BreakdownFirst";
// import BreakdownSecond from "./Breakdown/BreakdownSecond";
import Counter from "./Counter/Counter";


import HowWeWorks from "../components/HowWeWorks/howweworks";

import Devices from "../components/Home/Devices";
// import Topseller from "../components/Shared/Topseller";
// import bg from "../public/Reviews.png";
import Categories from "../components/Home/Categories";


export default function Home() {
  return (
    <div className="feature-font">
      <Head>
        <title>Freelance marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Header />
        </div>
        <div>
          <Banner />
          <Categories />
          <HowWeWorks />
          {/* <BreakdownFirst />
          <BreakdownSecond /> */}
          <Devices />
          <Counter />
          
        </div>
        <div>
          <HomeServicesSlider />
          <Feature />
          <HowItWorks />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
