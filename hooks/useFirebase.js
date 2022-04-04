import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import app from "../components/Firebase/firebase.init";




//initialize firebase app
app();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setIsLoadind] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();

    //rgister user with email and pass
    const registerUser = (email, password) => {
        setIsLoadind(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);

            })
            .finally(() => setIsLoadind(false));
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
            setIsLoadind(false);
        });
        return () => unSubscribe;
    }, [])

    //signIn user email and pass
    const logInUser = (email, password) => {
        setIsLoadind(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoadind(false));
    }

    // google signIN
    const signInWithGoogle = () => {
        setIsLoadind(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                setError('');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                setError(error.message)
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            })
            .finally(() => setIsLoadind(false));
    }

    //google sing out
    // const logout = () => {
    //     signOut(auth)
    //         .then(() => { })
    // }

    //logout email and pass
    const logOut = () => {
        setIsLoadind(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoadind(false));
    }

    return {
        user,
        registerUser,
        logInUser,
        signInWithGoogle,
        loading,
        setIsLoadind,
        logOut,
        error
    }
};

export default useFirebase;