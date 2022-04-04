import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
// import {user} from "firebase/auth"

// const IAuth = {
//     user: user,
   
// }

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;