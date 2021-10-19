import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Login from './Login';
import Registration from './Registration';

const LoginReg = () => {
    const [toggle,setToggle]=useState(false);
    return (
        
        <div>
            <Header/>
            <div className="p-4 mx-auto rounded">
            
            {toggle?<Login/>:<Registration/>}

            {toggle?
            (
            <div onClick={()=>setToggle(false)} className="justify-content-center d-flex g-2 align-items-center">
              <span className="fs-5">New User ?</span>
              <button  type="submit" className="mx-2 btn btn-primary fs-5">Registration</button>
            </div>
            ):(
            <div onClick={()=>setToggle(true)} className="justify-content-center d-flex g-2 align-items-center">
              <span className="fs-5">Already have account ?</span>
              <button  type="submit" className="mx-2 btn btn-primary fs-5">Login</button>
            </div>
            )}
          </div>
          <Footer/>
        </div>
    );
};

export default LoginReg;