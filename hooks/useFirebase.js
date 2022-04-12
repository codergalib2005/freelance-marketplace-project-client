import { message } from "antd";
import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import app from "../components/Firebase/firebase.init";



//initialize firebase app
app();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [userStatus, setUserStatus] = useState("");
    const [loading, setIsLoadind] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter()

    const auth = getAuth();
    //rgister user with email and pass
    const registerUser = (data) => {
        const { thumbnail, status, profession, name, image, gender, email, skills, about, avatar, education, bio, password } = data;
        setIsLoadind(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                //  User data save in database
                let body = {
                    thumbnail,
                    status,
                    profession,
                    name,
                    image,
                    gender,
                    email,
                    skills,
                    about,
                    avatar,
                    education,
                    bio
                }
                axios.post("https://dry-plains-53771.herokuapp.com/auth/users", body)
                    .then(res => {
                        message.success("User register successfully!");
                        router.replace("/")
                        setError('');
                    })
                    .catch(err => console.log(err))
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);
                message.error(error.message);

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
    }, [auth]);



    //signIn user email and pass
    const logInUser = (email, password) => {
        setIsLoadind(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                message.success("User login successfully!");
                router.replace("/")
                setError('');
            })
            .catch((error) => {
                setError(error.message)
                message.error(error.message);
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
                const user = result.user;
                router.replace("/")
                setError('');
                message.success("User register successfully!");
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                setError(error.message)
                message.error(error.message);
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            })
            .finally(() => setIsLoadind(false));
    };

    // Load Login personal data loader 
    useEffect(() => {
        setIsLoadind(true);
        fetch(`https://dry-plains-53771.herokuapp.com/auth/users/email/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setUserStatus(data?.result[0]?.status)
                setIsLoadind(false)
            })
            .catch((err) => console.log(err));
    }, [user?.email]);

    //logout email and pass
    const logOut = () => {
        setIsLoadind(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                message.success("User sign out successfully!");
            }).catch((error) => {
                // An error happened.
                message.error(error.message);
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
        error,
        userStatus
    }
};

export default useFirebase;