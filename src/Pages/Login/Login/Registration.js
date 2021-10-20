import InitAuth from '../Firebase/firebase.init';
import useAuth from '../../../hooks/useAuth';



InitAuth();
const Registration = () => {
    const {handleEmailChange,handlePasswordChange,handleRegistration} = useAuth();

    return (
        <div className="text-primary bg-info rounded">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src="https://i.ibb.co/Jj0Bv1s/register-here-banner-template-here-vector-30374103.jpg" alt="" />
                </div>
                <div className="col-md-6">
                <div className="row g-3 container p-4 mx-auto m-4 rounded">
                    <div className="d-flex text-start align-items-center">
                        <i className="far fa-user p-2 fs-4"></i>
                        <h2>Please Register</h2>
                    </div>

                    <div className="col-md-12 text-start">
                        <label  className="form-label fs-5">Email</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" required />
                    </div>
                    <div className="col-md-12 text-start">
                        <label  className="form-label fs-5">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" required/>
                    </div>

                    <div className="col-12 text-start">
                        <button onClick={handleRegistration} type="submit" className="btn btn-primary fs-5">Register</button>
                    </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Registration;