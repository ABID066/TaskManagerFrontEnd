import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../components/masterLayout/Master-layout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";

const NewTask = lazy(() => import("../components/NewTask/NewTask.jsx"));

const NewTaskPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <NewTask/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default NewTaskPage;