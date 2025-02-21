import {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-layout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";

const Completed = lazy(() => import("../components/Completed/Completed.jsx"));

const CompletedPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Completed/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CompletedPage;