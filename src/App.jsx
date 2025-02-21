import { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NewTaskPage from "./pages/NewTaskPage.jsx";
import InProgressPage from "./pages/InProgressPage.jsx";
import CompletedPage from "./pages/CompletedPage.jsx";
import CanceledPage from "./pages/CanceledPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import Page404 from "./pages/Page404.jsx";
import ForgetpassPage from "./pages/ForgetpassPage.jsx";
import FullscreenLoader from "./components/masterLayout/FullScreenLoader.jsx";
import { getToken } from "./helper/SessionHelper.js";

import VerifyOTPPage from "./pages/AccountRecover/Verify-OTP-Page.jsx";
import CreatePasswordPage from "./pages/AccountRecover/Create-Password-Page.jsx";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    return getToken() ? children : <Navigate to="/login" replace />;
};

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                    <Route path="/create" element={<ProtectedRoute><CreatePage /></ProtectedRoute>} />
                    <Route path="/all" element={<ProtectedRoute><NewTaskPage /></ProtectedRoute>} />
                    <Route path="/progress" element={<ProtectedRoute><InProgressPage /></ProtectedRoute>} />
                    <Route path="/completed" element={<ProtectedRoute><CompletedPage /></ProtectedRoute>} />
                    <Route path="/canceled" element={<ProtectedRoute><CanceledPage /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />

                    <Route path="/forget-password" element={<ForgetpassPage />} />
                    <Route path="/verify-otp" element={<VerifyOTPPage/>}/>
                    <Route path="/create-password" element={<CreatePasswordPage />}/>

                    <Route path="*" element={<Page404/>} />
                </Routes>
            </BrowserRouter>
            <FullscreenLoader />
        </Fragment>
    );
};

export default App;
