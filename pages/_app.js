import "antd/dist/antd.css";
import AuthProvider from "../Context/AuthProvider/AuthProvider";
import "../styles/custom.css";
import "../styles/globals.css";
import "../styles/profile.css";
import "../styles/SellerFooter.css";
import "../styles/SellerLearningPath.css";
import "../styles/global.sidebar.css";
import "../styles/pages/_totalGigs.css";
import "../styles/Header.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
        showOnShallow={true} />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;


// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import "antd/dist/antd.css";
// import AuthProvider from "../Context/AuthProvider/AuthProvider";
// import "../styles/custom.css";
// import "../styles/globals.css";
// import "../styles/profile.css";
// import "../styles/SellerFooter.css";
// import "../styles/SellerLearningPath.css";
// import "../styles/global.sidebar.css";
// import "../styles/pages/_totalGigs.css";
// import "../styles/Header.css";
// import NextNProgress from "nextjs-progressbar";


// function Loading() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
//     const handleComplete = (url) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 5000);

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     }
//   }, []);
//   return loading && (
//     <div className="main_loader_parent">
//       <span className="main_loader"></span>
//     </div>
//   )
// }



// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <NextNProgress color="#29D"
//         startPosition={0.3}
//         stopDelayMs={200}
//         height={6}
//         showOnShallow={true} />
//       <Loading />
//       <AuthProvider>
//         <Component {...pageProps} />
//       </AuthProvider>
//     </>
//   );
// }

// export default MyApp;
