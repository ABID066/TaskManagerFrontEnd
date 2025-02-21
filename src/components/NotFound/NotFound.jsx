import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    let navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-7xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mt-2">Oops! Page Not Found</h2>
            <p className="text-gray-500 mt-4 text-center max-w-md">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default NotFound;
