import {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-layout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";

const InProgress = lazy(() => import("../components/InProgress/InProgress.jsx"));

const InProgressPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <InProgress/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default InProgressPage;