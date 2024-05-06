import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../Components/Firebase/firebase-config";

export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(false);

    //create user
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // update user 
    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }


    useEffect(()=>{
        const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
              setUser(currentUser);
              setLoading(false);
          })
          return ()=>unSubscribe();
      },[]);
       //logout 
    const logOut=()=>{
        setLoading(true);
       return signOut(auth);
    }

        //   login 
        const loginUser=(email,password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password)
        }

        const findObj={
            date:'0',
            destination:'non',
            bustype:'non'
        }
    const authInfo={user,createUser,updateUser,loading,logOut,loginUser,findObj}


    return(
        <div>
            <AuthContext.Provider value={authInfo}>
                    {children}
            </AuthContext.Provider>
        </div>
    );
}

export default AuthProvider