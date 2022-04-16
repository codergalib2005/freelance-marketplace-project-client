import "antd/dist/antd.css";
import AuthProvider from "../Context/AuthProvider/AuthProvider";
import "../styles/custom.css";
import "../styles/globals.css";
import "../styles/profile.css";
import "../styles/SellerFooter.css";
function MyApp({ Component, pageProps, router }) {
import "../styles/SellerLearningPath.css";
import "../styles/global.sidebar.css";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} key={router.route} />
    </AuthProvider>
  );
}

export default MyApp;
