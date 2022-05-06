import { message } from "antd";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import app from "../components/Firebase/firebase.init";

//initialize firebase app
app();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [userStatus, setUserStatus] = useState("");
  const [loading, setIsLoadind] = useState(true);
  const [error, setError] = useState("");
  //for admin
  // const [admin, setAdmin] = useState(false)

  const router = useRouter();

  const auth = getAuth();

  //rgister user with email and pass
  const registerUser = (data) => {
    const {
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
      bio,
      password,
    } = data;
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
          bio,
        };
        // body for chat database
        const chatBody = {
          name,
          image,
          email,
        };
        //update profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: avatar,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        axios
          .post(`${process.env.NEXT_PUBLIC_URL}/users, body`)
          .then((res) => {
            message.success("User register successfully!");
            sendUserForChat(chatBody);
            router.replace("/");
          })
          .catch((err) => console.log(err));
        // send to database for chat system
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
        message.error(error.message);
      })
      .finally(() => setIsLoadind(false));
  };
  const sendUserForChat = (chatBody) => {
    axios
      .post("https://freelancer-chat-app-api.herokuapp.com/api/users", chatBody)
      .then((res) => {
        if (res.status === 200) {
          router.replace("/");
        }
      })
      .catch((err) => console.log(err));
  };

  //user observe user
  useEffect(() => {
    setIsLoadind(true);
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

  //for admin
  // axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/${user?.email}}`)
  // .then(res => setAdmin(res.data.admin))
  // useEffect(() => {
  //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/${user?.email}}`)
  //     .then(res => res.json())
  //     .then(data => setAdmin(data?.access))
  // },[user?.email])

  //for admin
  // useEffect(() => {
  //     fetch(${process.env.NEXT_PUBLIC_URL}/users/admin/${user?.email})
  //     .then(res => res.json())
  //     .then(data => setAdmin(data.admin))
  // },[user?.email])

  //signIn user email and pass
  const logInUser = (email, password) => {
    setIsLoadind(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        message.success("User login successfully!");
        router.replace("/");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        message.error(error.message);
      })
      .finally(() => setIsLoadind(false));
  };

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
        router.replace("/");
        setError("");
        message.success("User register successfully!");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        setError(error.message);
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
    fetch(`${process.env.NEXT_PUBLIC_URL}/users/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserStatus(data?.result[0]?.status);
        setIsLoadind(false);
      })
      .catch((err) => console.log(err));
  }, []);

  //logout email and pass
  const logOut = () => {
    setIsLoadind(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        message.success("User sign out successfully!");
      })
      .catch((error) => {
        // An error happened.
        message.error(error.message);
      })
      .finally(() => setIsLoadind(false));
  };

  return {
    user,
    // admin,
    registerUser,
    logInUser,
    signInWithGoogle,
    loading,
    setIsLoadind,
    logOut,
    error,
    userStatus,
  };
};

export default useFirebase;
