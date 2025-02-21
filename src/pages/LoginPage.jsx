import {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";

const Login = lazy(() => import("../components/login/Login.jsx"));

const LoginPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader />}>
                <Login/>
            </Suspense>
        </Fragment>
    );
};

export default LoginPage;