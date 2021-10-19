import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {const {handleEmailChange,handlePasswordChange,handleLoginButton,handleGoogleSIgnIn,handleFbSignIn}=useAuth()

    const location = useLocation();
    const histry = useHistory();
    const reDirect_uri = location.state?.from || '/home';
    const [error,setError] = useState('');
    
    // Button
    const handleButton=()=>{
        handleLoginButton()
        .then(result=>{
            histry.push(reDirect_uri);
        })
        .catch(error=>{
            setError(error.message);
        })
    }
    // Google
    const handleGoogle=()=>{
        handleGoogleSIgnIn()
        .then(result=>{
              histry.push(reDirect_uri);
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    // Facebook
    const handleFacebook=()=>{
        handleFbSignIn()
        .then(result=>{
            histry.push(reDirect_uri);
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    return (
        <div className="text-primary bg-info rounded">
            
            <div className="row g-3 container mx-auto m-4 p-4">

                <div className="d-flex text-start align-items-center">
                    <i className="far fa-user p-2 fs-4"></i>
                    <h2>Please Login</h2>
                </div>

                <div className="col-md-12 text-start">
                    <label className="form-label fs-5">Email</label>
                    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-12 text-start">
                    <label  className="form-label fs-5">Password</label>
                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12 text-start">
                    <button onClick={handleButton} type="submit" className="btn btn-primary fs-5">Log in</button>
                </div>
                <p className="text-danger">{error}</p>
                <br />

                <div className="d-flex p-4 justify-content-evenly">
                    <button 
                    onClick={handleGoogle} 
                    className="btn btn-primary mx-2 ">
                        <span className="d-flex align-items-center">
                            <span>Login with</span><i className="fab fa-google px-2"></i>
                        </span>
                    </button>

                    <button 
                    onClick={handleFacebook} 
                    className="btn btn-primary mx-2 ">
                        <span className="d-flex align-items-center">
                            <span>Login with</span><i className="fab fa-facebook px-2"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;