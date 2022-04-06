import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

let app = () =>{

if(getApps().length){
    app = getApp ();
} else{
    app = initializeApp(firebaseConfig)
}
}

export default app;

