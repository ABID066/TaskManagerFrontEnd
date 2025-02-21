import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    let navigate = useNavigate();

    return (
        <div className="flex text-center flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-9xl font-extrabold text-[#cb0c9f]">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 mt-2 text-center max-w-lg">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-3 btn-primary text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#a80a7f] transition-all duration-300"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default NotFound;
