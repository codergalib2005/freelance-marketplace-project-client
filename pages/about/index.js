import React from 'react';
import Banner from '../../components/About/Banner';
import KeepItConnect from '../../components/About/KeepItConnect';
import Testimonial from '../../components/About/Testimonial';
import WhoweAre from '../../components/About/WhoweAre';
import SellerFooter from '../../components/BecomeASeller/SellerFooter';
import Nabbar from '../../components/About/Nabbar';


export default function About() {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <Nabbar />
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
        </div>
    );
};

