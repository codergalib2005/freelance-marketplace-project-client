import 'antd/dist/antd.css';
import AuthProvider from '../Context/AuthProvider/AuthProvider';
import '../styles/custom.css';
import '../styles/globals.css';
import '../styles/profile.css';
function MyApp({ Component, pageProps }) {
 return (
  <AuthProvider>
  <Component {...pageProps} />
</AuthProvider>
 )
}

export default MyApp
