import React from 'react';
import DeactiveAccount from './DeactiveAccount';
import UpdateProfile from './UpdateProfile';

const AccountSetting = () => {
    return (
        <div>
            <UpdateProfile/>
            <DeactiveAccount/>
        </div>
    );
};

export default AccountSetting;