import React from 'react';
import Banner from '../../components/About/Banner';
import Header from '../../components/About/Header';
import KeepItConnect from '../../components/About/KeepItConnect';
import Testimonial from '../../components/About/Testimonial';
import WhoweAre from '../../components/About/WhoweAre';
import SellerFooter from '../../components/BecomeASeller/SellerFooter';
import Header from '../../components/About/Header';

export default function About() {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <Header />
            </div>
            <div>
                <WhoweAre />
            </div>
            <div>
            <Testimonial />
            </div>
            <div>
                <KeepItConnect />
            </div>
            <div>
            <SellerFooter />
            </div>
            <h2>About</h2>
        </div>
    );
};

