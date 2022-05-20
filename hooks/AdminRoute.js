/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

export function withAdmin(Component) {
  return function withAdmin(props) {
    const { loading, admin,user } = useAuth();
    console.log(admin);
    const router = useRouter();
    if (loading  ) {
      return (
        <button type="button" className="bg-red-500 ..." disabled>
          <div className="min-h-screen flex items-center justify-center w-screen">
            <span className="main-loader"></span>
          </div>
        </button>
      );
    }
    if  (!loading && admin ===false || !user.email ){
      <button type="button" className="bg-red-500 ..." disabled>
          <div className="min-h-screen flex items-center justify-center w-screen">
            <span className="main-loader"></span>
          </div>
        </button>
      router.push('/404.js')
    }
    else if
    (!loading && admin ===true && user.email){
    return <Component admin={admin} {...props} />;
    }
    
  };
}
