import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Comp_Auths/firebase.config";



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [watchlisted, setWatchListed] = useState(false);
    const [userWatchList, setUserWatchList] = useState([])
    const [dark, setDark] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => unSubscribe();
    }, [auth])


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userSignOut = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth)
    }
    const provider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const authInfo = {
        user, watchlisted, dark, loading, userWatchList,
        createUser, userLogin, userSignOut, googleSignIn, setUser, setWatchListed, setUserWatchList, setDark, setLoading,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
