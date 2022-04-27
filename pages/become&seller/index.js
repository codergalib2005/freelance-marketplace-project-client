import React from "react";
import SellerBanner from "../../components/BecomeASeller/SellerBanner";
import SellerWork from "../../components/BecomeASeller/SellerWork";
import SellerFooter from "../../components/BecomeASeller/SellerFooter";
import SellerHeader from "../../components/BecomeASeller/SellerHeader";
import SellerLearningPath from "../../components/BecomeASeller/SellerLearningPath";
import HowItWorks from "../../components/Home/HowItWorks";
import Header from "../../components/Shared/Header";
import HeaderTop from "../../components/Shared/HeaderTop";

const BecomeASeller = () => {
  return (
    <section>
      <header>
        <HeaderTop />
        <Header />
      </header>
      <main>
        <SellerBanner />
        <HowItWorks />
        <SellerLearningPath />
      </main>
      <footer>
        <SellerFooter />
      </footer>
    </section>
  );
};

export default BecomeASeller;
