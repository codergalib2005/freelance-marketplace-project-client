import React, {useState} from 'react';
import features__data from '../../public/community/features_data.json'
import FeaturesCart from './FeaturesCart';

const Features = () => {
    const [data,setData] = useState(features__data)
    return (
        <div>
            <div className="container mx-auto px-8  lg:px-0 my-20">
                <div>
                <h4 className="text-lg tracking-[.30rem] text-red-600 font-bold text-center">
              FEATURES
            </h4>
            <h4 className="text-5xl text-indigo-900 font-bold tracking-tighter text-center">
              A community is a <br /> social unit
            </h4>
            <h4 className="text-lg  opacity-50 my-6 text-center">
              in virtual space through communication platform. Durable relations  <br/>
              that extend beyond immediate genealogical ties also define a sense
              of community.
            </h4>
                </div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            data.map(info=>(<FeaturesCart key={info.id} {...info} />))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Features;