import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="py-4 md:py-0">
      <div className="container mx-auto px-4">
        <ul className="lg:flex justify-center text-base font-semibold">
          <div>
            <Link href="#">
              <a className="text-2xl font-bold py-6 px-8">Who We Are</a>
            </Link>
          </div>
          <div>
            <Link href="#">
              <a className="text-2xl font-bold py-6 px-8">Meet Our Team</a>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
