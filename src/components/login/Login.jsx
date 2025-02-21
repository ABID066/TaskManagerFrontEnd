import {Fragment, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {ErrorToast, IsEmail, IsEmpty} from "../../helper/FormHelper.js";
import {LoginRequest} from "../../APIRequest/APIRequest.js";

const Login = () => {
    let emailRef = useRef();
    let passwordRef= useRef();
    const navigate = useNavigate();

    const  SubmitLogin=async ()=>{
        let email=emailRef.current.value;
        let password=passwordRef.current.value;
        if(IsEmpty(email)){
            ErrorToast("Email address required!")
        }
        else if(IsEmail(email)){
            ErrorToast("Invalid Email address!")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password required!")
        }
        else {
            const result = await LoginRequest(email, password);
            if (result === true) {
                //window.location.href = "/";
                navigate("/");
            }
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4 className="text-center">Sign In</h4>
                                <br/>
                                <input ref={emailRef} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input ref={passwordRef} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={SubmitLogin} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                                <hr/>
                                <div className="text-center w-100 mt-3">
                                    <span>
                                        <Link className="text-center animated fadeInUp" to="/registration">Sign Up </Link>
                                        <br/>
                                        <Link className="text-center animated fadeInUp" to="/forget-password">Forget Password</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;