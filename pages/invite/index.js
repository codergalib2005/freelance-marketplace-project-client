import React from 'react';
import SellerFooter from '../../components/BecomeASeller/SellerFooter';
import Banner from '../../components/Invite/Banner';
import GetLinks from '../../components/Invite/GetLinks';
import Steps from '../../components/Invite/Steps';

const Invite = () => {
    return (
        <div>
            <Banner />
            <GetLinks />
            <Steps />
            <SellerFooter />
        </div>
    );
};

export default Invite;