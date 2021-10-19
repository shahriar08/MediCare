import { useEffect, useState } from "react";
import initializeAuthentication from '../components/Firebase/firebase.init';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, signOut,
    createUserWithEmailAndPassword } from "firebase/auth";

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
  
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser(userCredential.user);
        }).catch(error => {
            setError(error.message);
        })
    }
    const signupUsingForm = (event) => {
        event.preventDefault();
        const email = event.target["email"].value;
        const password = event.target["password"].value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                setError(error.message);
            });
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
        // email,
        signupUsingForm,
        signInUsingGoogle,
        signInUsingFB,
        signInUsingForm,
        logOut
    }
}

export default useFirebase;