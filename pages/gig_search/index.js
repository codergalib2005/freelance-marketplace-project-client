import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillGrid3X3GapFill, BsFilterLeft } from 'react-icons/bs';
import SingleGig from '../../components/gigs/SingleGig';
const gig_search = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState('');
  //gig search
  const [search, setSearch] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showSidebar, setShowSidebar] = useState(true)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [allGigs, setAllGigs] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [gridColumn, setGridColumn] = useState("grid_column")
  setTimeout(() => {
    setLoading(false);
  }, 3000)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/gigs`)
      .then(res => {
        setAllGigs(res?.data?.result);
      })
      .catch(err => {
        console.log(err)
      }
      )
  }, [])
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(allGigs);
  return (
    <div>
      <nav className='bg-[#2a3254]'>
        <div className="container-fluid mx-auto px-3 py-2">
          <div className="flex items-center justify-between">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/banner/navbar/image/logo-white.png" alt="Header Logo" />
            </div>
            <div className='flex rounded-full pr-5  bg-gray-50 items-center h-14 w-full' style={{ maxWidth: "400px" }}>
              <span style={{ width: "100%", maxWidth: "60px", }} className='flex items-center justify-center text-2xl'><BiSearchAlt2 /></span>
              <input className='w-full h-10 rounded-full p-2 outline-none' type="text" placeholder='search' onChange={e => {setSearch(e.target.value)}} />
            </div>
            <div>
              <ul className='flex items-center'>
                <li className="text-lg font-bold text-white ml-6">
                  <Link href="/home">Home</Link>
                </li>
                <li className="text-lg font-bold text-white ml-6">
                  <Link href="/home">Home</Link>
                </li>
                <li className="text-lg font-bold text-white ml-6">
                  <Link href="/home">Home</Link>
                </li>
                <li className="text-lg font-bold text-white ml-6">
                  <Link href="/home">Home</Link>
                </li>
                <li className="text-lg font-bold text-white ml-6">
                  <Link href="/home">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Filter box header */}
      <div className='bg-[#0a1929] py-10 border-b-2 border-gray-50'>
        <div className='container-fluid mx-auto px-4'>
          <div className='flex items-center justify-between'>
            <div>
              <button className='border-2 border-[#4c7bbc] w-16 h-16 flex items-center justify-center' onClick={() => setShowSidebar(!showSidebar)}>
                <span className='text-3xl color-white'><BsFilterLeft color="white" /></span>
              </button>
            </div>
            <div>
              <div className='grid grid-cols-2 w-40 h-16 border-2 border-[#4c7bbc]'>
                <button
                  onClick={() => setGridColumn("grid_column")}
                  className='flex items-center justify-center border-r-2 border-[#4c7bbc]'>
                  <span className='text-2xl'><BsFillGrid3X3GapFill color="white" /></span>
                </button>
                <button
                  onClick={() => setGridColumn("grid_row")}
                  className='flex items-center justify-center'>
                  <span className='text-2xl'><AiOutlineBars color="white" /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#2a3254] min-h-screen'>
        <div className='flex justify-between gap-4 relative'>
          {/* This s the menu show sidebar */}
          <div className={`transition-all duration-300 ease-linear w-full px-2 min-h-screen bg-[#0a1929] absolute top-0 ${showSidebar ? "left-0" : " -left-80"}`}
            style={{ maxWidth: "19rem" }}
          >
            <div style={{ overflowY: 'scroll' }} className='h-full sidebar_menu_scrollbar pl-4 py-5'>
              <FormControl>
                <h4 className='text-2xl font-normal text-white'>Category Select</h4>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  className='mt-5'
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel value="design" control={<Radio />} label="Design" />
                  <FormControlLabel value="development" control={<Radio color="success" />} label="Development" />
                  <FormControlLabel value="graphic" control={<Radio color="success" />} label="Graphic" />
                  <FormControlLabel value="writing" control={<Radio color="success" />} label="Writing" />
                  <FormControlLabel value="ceo" control={<Radio color="success" />} label="CEO" />
                  <FormControlLabel value="Marketing" control={<Radio color="success" />} label="Marketing" />
                  <FormControlLabel value="apps" control={<Radio color="success" />} label="Mobile Apps" />
                  <FormControlLabel value="web" control={<Radio color="success" />} label="Web" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {/* Show All contents Here */}
          <div style={{ overflowY: "scroll", maxWidth: '1100px' }} className={`content_scrollbar transition-all duration-300 py-10 ease-linear w-full bg-[#2a3254] h-4 min-h-screen text-white mx-auto px-6 ${showSidebar ? "pl-80" : "pl-6"}`}>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-5'>
              {loading && [0, 1, 2, 3, 4, 5, 6].map(item => (
                <div key={item}>
                  <div>
                    <Skeleton sx={{ height: 70 }} animation="wave" variant="rectangular" />
                    <br />
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                    <br />
                    <Skeleton sx={{ height: 30 }} animation="wave" variant="rectangular" />
                  </div>
                </div>
              ))
              }
            </div>
            {!loading && (
              <div className={`${gridColumn === "grid_column" && "gig_wrapper_column"}`}>
                {
                  allGigs?.filter((gig)=>{
                    if(search === ''){
                      return gig
                    }else if(gig.category.toLowerCase().includes(search.toLowerCase())){
                      return gig
                    }
                  }).map(gig => <SingleGig gridColumn={gridColumn} key={gig?._id} gig={gig} />)
                }
              </div>
            )

            }
          </div>
        </div>
      </div>
    </div >
  );
};

export default gig_search;