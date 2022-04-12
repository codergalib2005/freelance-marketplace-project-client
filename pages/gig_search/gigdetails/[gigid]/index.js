import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
const GigDetails = () => {
  // const [gig, setSingleGig]
  const router = useRouter()
  const GETURL = `https://dry-plains-53771.herokuapp.com/auth/gigs/${router?.query?.gigid}`
  axios.get(GETURL)
    .then(res => console.log(res?.data?.result[0]))
    .catch(err => console.log(err));
  return (
    <div>
      <h1>Gig Details {router.query.gigid}</h1>
    </div>
  );
};

export default GigDetails;