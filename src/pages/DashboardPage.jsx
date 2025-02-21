import {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-layout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";

const Dashboard = lazy(()=>import("../components/Dashboard/Dashboard.jsx"));

const DashboardPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Dashboard/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default DashboardPage;