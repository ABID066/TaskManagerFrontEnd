import {Fragment, useState} from 'react';
import ReactCodeInput from "react-code-input";
import {ErrorToast, SuccessToast} from "../../helper/FormHelper.js";
import {VerifyOTPRequest} from "../../APIRequest/APIRequest.js";
import {getEmail} from "../../helper/SessionHelper.js";
import {useNavigate} from "react-router-dom";


const VerifyOtp = () => {

    let navigate = useNavigate();

    const  defaultInputStyle= {
        fontFamily: 'monospace',
        margin:  '4px',
        MozAppearance: 'textfield',
        width: '45px',
        borderRadius: '3px',
        fontSize: '32px',
        height: '45px',
        paddingLeft: '8px',
        border: "1px solid lightskyblue",
        boxSizing: 'border-box',
        color: "black",
        backgroundColor: 'white',
        borderColor: 'lightgrey',
    }

      let [OTP, setOTP] = useState("")

      const SubmitOTP = async () => {
          if(OTP.length===6){
              let result = await VerifyOTPRequest(getEmail(),OTP)
              if (result === true) {
                  SuccessToast("OTP Verified!");
                  navigate("/create-password");
              }
          } else {
              ErrorToast("Enter 6 digit Code!")
          }
      }



    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90 p-4">
                            <div className="card-body">
                                <h4 className="text-center">OTP Verification</h4>
                                <p>A 6 digit verification code has been sent to your email address</p>
                                <div className="text-center">
                                <ReactCodeInput onChange={(value)=> setOTP(value)} inputStyle={defaultInputStyle} type='number' fields={6} /></div>
                                <br/>
                                <br/>
                                <button onClick={SubmitOTP} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default VerifyOtp;