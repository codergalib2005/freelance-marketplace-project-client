/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

export function withPrivate(Component) {
    return function withPrivate(props) {
          const {loading,user}=useAuth();
          const router = useRouter();
         if(loading){
            return <button type="button" className="bg-white" disabled>
            <div className='min-h-screen flex items-center justify-center w-screen'>
            <span className="main-loader"></span> 
            </div>
        </button>
        }
        if (user.email) {
             return <Component auth={user} {...props} />
        }
        else{
            useEffect(()=>{
            router.replace("/login/register")
           },[])
        }
    }
}