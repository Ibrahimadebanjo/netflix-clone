// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
     createUserWithEmailAndPassword,
      getAuth,
       signInWithEmailAndPassword, 
       signOut} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import {
     addDoc,
      collection,
       getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB61o76r8ABXo5OrdE9R-zCjJg3aeouZm4",
  authDomain: "netflix-clone-9fe69.firebaseapp.com",
  projectId: "netflix-clone-9fe69",
  storageBucket: "netflix-clone-9fe69.firebasestorage.app",
  messagingSenderId: "830945070648",
  appId: "1:830945070648:web:f971b5b03a2193208de0cd",
  measurementId: "G-24XLWXQ4PZ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup= async (name, email, password)=> {
try{
   const res = await createUserWithEmailAndPassword(auth,email,password);
   const user = res.user;
   await addDoc(collection(db,"user"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email,
   });
} catch(error){
console.log(error);
toast.error(error.code);
}
}

const login = async (email, password)=> {
try {
    signInWithEmailAndPassword(auth,email, password);
} catch (error) {
    console.log(error);
    toast.error(error.code);
}
}
const logout = ()=>{
    signOut(auth);
}
export {auth, db, login, signup,logout}