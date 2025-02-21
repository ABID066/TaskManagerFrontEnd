import {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";

const Forgetpass = lazy(() => import("../components/Forgetpass/Forgetpass.jsx"));

const ForgetpassPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader />}>
                <Forgetpass/>
            </Suspense>
        </Fragment>
    );
};

export default ForgetpassPage;