import { useState, useEffect } from 'react';
import initializeFirebase from '../components/Firebase/firebase.init';

import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    //log in with email and pass
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }

    //user observe user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                setUser({});
            }
        });
        return () => unSubscribe;
    }, [])

    //signIn user
    const logInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    //logout email and pass
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return {
        user,
        registerUser,
        logInUser,
        logOut,
    }
};

export default useFirebase;