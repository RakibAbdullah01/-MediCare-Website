import InitAuth from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";

InitAuth();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading,setIsLoading]=useState(true);
    const [doctors,setDoctors]=useState([]);
    const [services,setServices]=useState([]);

    // Universel Auth
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    // Get email 
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    // Get Password
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }


    // Handle Registration
    const handleRegistration =(e)=>{
        console.log(email,password);
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const {email,displayName,photoURL} = result.user;
            const userInfo ={
                name: displayName,
                email: email,
                photo: photoURL
            };
            setUser(userInfo);
            console.log(userInfo);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    // Log in button
    const handleLoginButton = ()=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// Google Button
const handleGoogleSIgnIn=()=>{
    return signInWithPopup(auth, googleProvider);
  };

//   Facebook Fogin
const handleFbSignIn=()=>{
    return signInWithPopup(auth, facebookProvider)
}
    
    // Observer use state change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false);
        })
        return ()=> unsubscribed;
    },[])

    // LogOut
    const logOut=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            
          })
          .finally(()=>setIsLoading(false));
    }

    // Load Services
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/arakib42/fake-data/main/fake-services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    // Load Doctors
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/arakib42/fake-data/main/fake-doc-list.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])


    

    return {
        logOut,
        user,
        isLoading,
        doctors,
        services,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLoginButton,
        handleGoogleSIgnIn,
        handleFbSignIn
        }
}
export default useFirebase;