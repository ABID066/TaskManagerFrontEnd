import {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-layout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";

const Create = lazy(() => import("../components/Create/Create.jsx"));

const CreatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>
                    <Create/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CreatePage;