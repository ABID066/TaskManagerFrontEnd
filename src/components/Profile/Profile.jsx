import {useEffect, useRef} from 'react';
import {GetProfileDetails, ProfileUpdate} from "../../APIRequest/APIRequest.js";
import {useSelector} from "react-redux";
import {ErrorToast, getBase64, IsEmail, IsEmpty, IsMobile} from "../../helper/FormHelper.js";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const userImgViewRef = useRef();
    const userImgRef = useRef();
    const emailRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const mobileNumRef = useRef()
    const passwordRef = useRef()

    const navigate = useNavigate();

    useEffect(()=>{
        GetProfileDetails()
    },[])

    const ProfileData = useSelector((state)=>state.profile.value)

    const PreviewImage = () => {
        let ImgFile = userImgRef.current.files[0];
        if (ImgFile) {
            getBase64(ImgFile).then((base64Img) => {
                userImgViewRef.current.src = base64Img;
            }).catch(error => console.error("Error converting image to base64:", error));
        }
    };

    const UpdateMyProfile = async () => {
        let email = emailRef.current.value;
        let firstName = firstNameRef.current.value;
        let lastName = lastNameRef.current.value;
        let mobile = mobileNumRef.current.value;
        let password = passwordRef.current.value;
        let photo = userImgViewRef.current.src;

        if (IsEmpty(email)) {
            ErrorToast("Email Required!");
        } else if (IsEmail(email)) {
            ErrorToast("Valid Email Address Required!");
        } else if (IsEmpty(firstName)) {
            ErrorToast("First Name Required!");
        } else if (IsEmpty(lastName)) {
            ErrorToast("Last Name Required!");
        } else if (IsEmpty(mobile)) {
            ErrorToast("Mobile Number Required!");
        } else if (!IsMobile(mobile)) {
            ErrorToast("Valid Mobile Number Required!");
        } else if (IsEmpty(password)) {
            ErrorToast("Password Required!");
        } else if (password.length < 6) {
            ErrorToast("Password must be at least 6 characters!");
        } else {
            const result = await ProfileUpdate(email, firstName, lastName, mobile, password, photo);
            if (result === true) {
                navigate("/");
            }
        }
    };


    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <img ref={userImgViewRef} className="icon-nav-img-lg"
                                     src={ProfileData['photo']} alt=""/>
                                <hr/>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label>Profile Picture</label>
                                        <input ref={userImgRef} onChange={PreviewImage}
                                               placeholder="User Photo" className="form-control animated fadeInUp"
                                               type="file"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Email Address</label>
                                        <input key={Date.now()} defaultValue={ProfileData['email']} readOnly={true}
                                               ref={emailRef} placeholder="User Email"
                                               className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>First Name</label>
                                        <input key={Date.now()} defaultValue={ProfileData['firstName']}
                                               ref={firstNameRef} placeholder="First Name"
                                               className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Last Name</label>
                                        <input key={Date.now()} defaultValue={ProfileData['lastName']}
                                               ref={lastNameRef} placeholder="Last Name"
                                               className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Mobile</label>
                                        <input key={Date.now()} defaultValue={ProfileData['mobile']}
                                               ref={mobileNumRef} placeholder="Mobile"
                                               className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Password</label>
                                        <input key={Date.now()} defaultValue={ProfileData['password']}
                                               ref={passwordRef} placeholder="User Password"
                                               className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <button onClick={UpdateMyProfile}
                                                className="btn w-100 float-end btn-primary animated fadeInUp">Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;