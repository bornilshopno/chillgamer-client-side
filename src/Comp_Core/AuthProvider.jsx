import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Comp_Auths/firebase.config";



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [watchlisted, setWatchListed] = useState(false);
    const [userWatchList, setUserWatchList]=useState([])
    const [dark, setDark] = useState(false)
    
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);


        })

        return () => unSubscribe();
    }, [auth])


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignOut = () => {
        setUser(null);
        return signOut(auth)
    }
    const provider = new GoogleAuthProvider()
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    const authInfo = {
        user,watchlisted, dark, 
        createUser, userLogin, userSignOut, googleSignIn,setUser,setWatchListed,userWatchList, setUserWatchList,setDark,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
