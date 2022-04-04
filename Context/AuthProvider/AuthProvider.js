import React, {createContext} from 'react';
import useFirebase from '../../hooks/useFirebase';
import useAuth from "../../hooks/useAuth";
import register from '../../pages/login/register'

export const AuthContext = createContext();


const AuthProvider = () => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value = {allContexts}>
            <register  />
        </AuthContext.Provider>
    );
};

export default AuthProvider;