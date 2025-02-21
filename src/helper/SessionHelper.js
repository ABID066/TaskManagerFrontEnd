class SessionHelper{

    setToken(token){
        localStorage.setItem('token', token);
    }
    getToken(){
        return localStorage.getItem('token');
    }
    setUserDetails(userDetails){
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem('userDetails'));
    }
    removeSession=()=>{
        localStorage.clear();
        window.location.href="/login";
    }
    setEmail(email){
        localStorage.setItem('Email', email);
    }
    getEmail(){
        return localStorage.getItem('Email');
    }
    setOTP(otp){
        localStorage.setItem('OTP', otp);
    }
    getOTP(){
        return localStorage.getItem('OTP');
    }
}
export const {setToken, getToken, setOTP, getOTP, setEmail, getEmail, setUserDetails, getUserDetails, removeSession} =new SessionHelper;