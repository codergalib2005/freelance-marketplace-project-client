import React from "react";
import SellerBanner from "../../components/BecomeASeller/SellerBanner";
import SellerWork from "../../components/BecomeASeller/SellerWork";
import SellerFooter from "../../components/BecomeASeller/SellerFooter";
import SellerHeader from "../../components/BecomeASeller/SellerHeader";
import SellerLearningPath from "../../components/BecomeASeller/SellerLearningPath";

const BecomeASeller = () => {
  return (
    <section>
      <header>
        <SellerHeader />
      </header>
      <main className="pt-14">
        <SellerBanner />
        <SellerWork />
        <SellerLearningPath />
      </main>
      <footer>
        <SellerFooter />
      </footer>
    </section>
  );
};

export default BecomeASeller;
