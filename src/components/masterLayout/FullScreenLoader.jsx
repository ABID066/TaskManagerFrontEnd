import {Fragment} from 'react';
import {useSelector} from "react-redux";


const FullscreenLoader = () => {
    const loaders = useSelector((state) => state.settings.loader)
    return (
        <Fragment>
            <div className={loaders+"  LoadingOverlay"}>

                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        </Fragment>
    );
};
export default FullscreenLoader;
