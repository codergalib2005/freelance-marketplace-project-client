import { useRouter } from 'next/router';
import React from 'react';
const GigDetails = () => {
  const router = useRouter()
  console.log(router.query.gigid);
  return (
    <div>
      <h1>Gig Details {route.query.gigid}</h1>
    </div>
  );
};

export default GigDetails;