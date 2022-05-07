import { message } from "antd";
import axios, { Axios } from "axios";
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
import { notification } from "antd";
//initialize firebase app
app();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [userStatus, setUserStatus] = useState("");
  const [loading, setIsLoadind] = useState(true);
  const [error, setError] = useState("");
  const [thisUser, setThisUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
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
          .post(`${process.env.NEXT_PUBLIC_API_URL}/users`, body)
          .then((res) => {
            notification.success({
              message: "Success",
              description: "User Created Successfully!",
              placement: "top",
              duration: 2,
              style: {
                width: 300,
                //   marginLeft: "calc(50% - 150px)",
                //   marginTop: "calc(50vh - 100px)",
                background: "#ec4899",
                color: "#2a3254 !important",
                borderBottom: "6px solid #3a3",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
              },
            });
            router.replace("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
        notification.error({
          message: "Error",
          description: `${error.message}`,
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            background: "#3a3",
            color: "#fff !important",
            borderBottom: "6px solid #e83a3b",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
      })
      .finally(() => setIsLoadind(false));
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
        notification.success({
          message: "Success",
          description: "User Signed In Successfully!",
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            background: "#ec4899",
            color: "#2a3254 !important",
            borderBottom: "6px solid #3a3",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
        router.replace("/");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        notification.error({
          message: "Error",
          description: `${error.message}`,
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            background: "#3a3",
            color: "#fff !important",
            borderBottom: "6px solid #e83a3b",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
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
        notification.success({
          message: "Success",
          description: "User register successfully!",
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            background: "#ec4899",
            color: "#2a3254 !important",
            borderBottom: "6px solid #3a3",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        setError(error.message);
        notification.error({
          message: "Error",
          description: `${error.message}`,
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            background: "#3a3",
            color: "#fff !important",
            borderBottom: "6px solid #e83a3b",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
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
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserStatus(data?.result?.status);
        setIsLoadind(false);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/users/email/${user?.email}`)
    .then(
      (response) => {
        setThisUser(response?.result);
      },
      (error) => {
        console.log(error);
      }
    );

  //logout email and pass
  const logOut = () => {
    setIsLoadind(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        notification.success({
          message: "Success",
          description: "User Signed Out Successfully!",
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            background: "#ec4899",
            color: "#2a3254 !important",
            borderBottom: "6px solid #3a3",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
      })
      .catch((error) => {
        // An error happened.
        notification.error({
          message: "Error",
          description: `${error.message}`,
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            background: "#3a3",
            color: "#fff !important",
            borderBottom: "6px solid #e83a3b",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
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
    thisUser,
    isOpen,
    setIsOpen,
  };
};

export default useFirebase;
