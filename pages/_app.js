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
        height={3}
        showOnShallow={true} />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;

