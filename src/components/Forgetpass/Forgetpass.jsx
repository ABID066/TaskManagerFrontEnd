import {Fragment, useRef} from 'react';
import {ErrorToast, IsEmail, IsEmpty, SuccessToast} from "../../helper/FormHelper.js";
import {VerifyEmailRequest} from "../../APIRequest/APIRequest.js";
import {useNavigate} from "react-router-dom";

const Forgetpass = () => {
    let emailRef = useRef();
    let navigate = useNavigate();

    const VerifyEmail = async () => {
        let email = emailRef.current.value;

        if (IsEmpty(email)) {
            ErrorToast("Email Required!");
        } else if (IsEmail(email)) {
            ErrorToast("Valid Email Address Required!");
        } else {
            let result = await VerifyEmailRequest(email);
            if (result === true) {
                SuccessToast("6 Digit Code sent to your email!");
                navigate("/verify-otp");
            }
        }
    };


    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90 p-4">
                            <div className="card-body">
                                <h4 className="text-center">Email Address</h4>
                                <br/>
                                <label>Your Email Address</label>
                                <input ref={emailRef} placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                                <br/>
                                <button onClick={VerifyEmail} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Forgetpass;