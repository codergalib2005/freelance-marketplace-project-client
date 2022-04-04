import React, { useEffect, useState } from 'react';
import GigItem from '../Shared/GigItem';

const Topseller = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch("/topseller/data.json")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {
            items?.slice(0, 9)?.map((item, index) => <GigItem key={index} item={item} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Topseller;