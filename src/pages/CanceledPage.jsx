import {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-layout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";

const Canceled = lazy(() => import("../components/Canceled/Canceled.jsx"));

const CanceledPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Canceled/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CanceledPage;