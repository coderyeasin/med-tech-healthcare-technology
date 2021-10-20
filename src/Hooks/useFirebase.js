import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, onAuthStateChanged, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import healthcareAuthentication from '../Firebase/firebase.init';


healthcareAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({})
    const [error, setError] = useState('')


    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isLogin, setLogin] = useState(false)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

  

    //google
    const googleSigning = () => {
        return signInWithPopup(auth, googleProvider)

    }

    //github
    const githubLogin = () => {
       return signInWithPopup(auth, gitProvider)
     
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])



    //login with email and pass
    const handleEmail = e => {
        setEmail(e.target.value);

    }
    const handlePass = e => {
        setPass(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault(); //use this for ---reload stop
        console.log(email, pass);
        if (pass.length < 6) {
            setError('Password Must be at least 6 characters long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
            setError('Password must contain 2 uppercase')
            return
        }
        isLogin ? processLogin(email, pass) : registerNewUser(email, pass)

    }

    const processLogin = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            })
    }

    const registerNewUser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('')
                verifyEmail()
                setUserName()
            })
            .catch(error => {
                setError(error.message)
            })
    }

    //SEND VERIFY LINK IN EMAIL

    //toogle
    const toggleLogin = e => {
        console.log(e.target.checked);
        setLogin(e.target.checked)
    }

    //verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    //reset pass
    const handleResetPass = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }
    //display name
    const handleNamechange = e => {
        setName(e.target.value)
    }
    //   //set user
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    return {
        user,
        error,
        googleSigning,
        logout,
        handleEmail,
        handlePass,
        handleRegistration,
        isLogin,
        toggleLogin,
        handleResetPass,
        handleNamechange,
        githubLogin,
        name
    }
}
export default useFirebase;