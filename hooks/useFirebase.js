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
  const [allGigs, setAllGigs] = useState([]);
  const [reviews, setReviews] = useState([]);
  //for admin
  // const [admin, setAdmin] = useState(false)

  const router = useRouter();

  const auth = getAuth();
  const configJson = {
    headers: {
      "Content-Type": "application/json",
    },
  };

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
        const chatBody = {
          name,
          avatar,
          email,
        };
        //update profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: avatar,
        })
          .then(() => {})
          .catch((error) => {});
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/users`, body, configJson)
          .then((res) => {
            //save Chatbox user data in Database
            sendUserForChat(chatBody);
            notification.success({
              message: "Success",
              description: "User Created Successfully!",
              placement: "top",
              duration: 2,
              style: {
                width: 300,
                //   marginLeft: "calc(50% - 150px)",
                //   marginTop: "calc(50vh - 100px)",
                borderBottom: "6px solid #3a3",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
              },
            });
            router.replace("/profile");
          })
          .catch((err) => console.log(err));
        // send to database for chat system
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
            borderBottom: "6px solid #e83a3b",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
      })
      .finally(() => setIsLoadind(false));
  };
  const sendUserForChat = (chatBody) => {
    axios
      .post(
        "https://freelancer-chat-app-api.herokuapp.com/api/users",
        chatBody,
        configJson
      )
      .then((res) => {
        if (res.status === 200) {
          router.replace("/profile");
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
        notification.success({
          message: "Success",
          description: "User Signed In Successfully!",
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
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
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/email/${user?.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserStatus(data?.result?.status);
        setIsLoadind(false);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/email/${user?.email}`,
        configJson
      )
      .then(
        (response) => {
          setThisUser(response?.data?.result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [configJson, user?.email]);

  // LOAD HERE ALL GIGS
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/gigs`, configJson)
      .then((res) => {
        setAllGigs(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [configJson]);
  // GET ALL REVIEWS LOGGIN USER BASED ON EMAIL
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews/sellerEmail/${user?.email}`,
        configJson
      )
      .then((res) => {
        setReviews(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [configJson]);

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
    allGigs,
    setAllGigs,
    reviews,
  };
};

export default useFirebase;
