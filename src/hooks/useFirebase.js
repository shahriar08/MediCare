import { useEffect, useState } from "react";
import initializeAuthentication from '../components/Firebase/firebase.init';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // const signInUsingEmail = () => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((result) => {
    //             setUser(result.user);
    //         })
    //         .catch((error) => {
    //             setError(error.message);

    //         });
    // }
    const signInUsingFB = () => {
        signInWithPopup(auth, fbProvider)
            .then((result) => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    return {
        user,
        error,
        // email,
        // password,
        signInUsingGoogle,
        signInUsingFB,
        // signInUsingEmail,
        logOut
    }
}

export default useFirebase;