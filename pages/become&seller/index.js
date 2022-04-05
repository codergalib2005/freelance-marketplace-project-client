import React from "react";
import SellerBanner from "../../components/BecomeASeller/SellerBanner";
import SellerFooter from "../../components/BecomeASeller/SellerFooter";
import SellerHeader from "../../components/BecomeASeller/SellerHeader";

const BecomeASeller = () => {
  return (
    <section>
      <header>
        <SellerHeader />
      </header>
      <main className="pt-14">
        <SellerBanner />
        <SellerFooter />
      </main>
    </section>
  );
};

export default BecomeASeller;
