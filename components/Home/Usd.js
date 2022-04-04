import React from 'react';
import { withPrivate } from '../../hooks/privateRout';

const Usd = () => {
    return (
        <div>
            <h2>this is usd</h2>  
        </div>
    );
};

export default withPrivate(Usd) ;