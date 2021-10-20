import { useEffect, useState } from "react";
import initializeAuthentication from '../components/Firebase/firebase.init';
import {
    getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, signOut,
    createUserWithEmailAndPassword
} from "firebase/auth";
// import { useHistory } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    // const history = useHistory();
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


    const signInUsingFB = () => {
        signInWithPopup(auth, fbProvider)
            .then((result) => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const signInUsingForm = (event) => {
        event.preventDefault();
        const email = event.target["email"].value;
        const password = event.target["password"].value;

        signInWithEmailAndPassword(auth, email, password).then((result) => {
            setUser(result.user);
        }).catch(error => {
            const errorCode = error?.code;
            const errorMessage =
                errorCode === "auth/user-not-found"
                    ? "Invalid Email or Password"
                    : error.message;
            setError(errorMessage);
        })
    }
    const signupUsingForm = (event) => {
        event.preventDefault();
        const email = event.target["email"].value;
        const password = event.target["password"].value;
        // const name = event.target["name"].value;
        // const phone = event.target["phone"].value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                const errorCode = error?.code;
                const errorMessage =
                    errorCode === "auth/user-not-found"
                        ? "Invalid Email or Password"
                        : error.message;
                setError(errorMessage);
            })
    };

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
        signupUsingForm,
        signInUsingGoogle,
        signInUsingFB,
        signInUsingForm,
        logOut
    }
}

export default useFirebase;