import {Fragment, useEffect} from 'react';
import {TaskSummary} from "../../APIRequest/APIRequest.js";
import {useSelector} from "react-redux";

const Dashboard = () => {

    useEffect(
        ()=>{
            TaskSummary();

        },[]
    )
    const SummaryList = useSelector((state)=>state.summary.value)
    console.log(TaskSummary);
    return (
        <Fragment>
            {
                <div className="container">
                    <div className="row">
                        {SummaryList.map((item,index)=>
                        <div className="col-12 col-lg-3 col-sm-3 p-2 animated fadeInUp">
                            <div className="card height-100">
                                <div className="card-body">
                                    <h5 className="animated fadeInUp">Total {item["_id"]}</h5>
                                    <h6 className="text-secondary animated fadeInUp">{item["sum"]}</h6>
                                </div>

                            </div>
                        </div>
                        )}
                    </div>
                </div>
            }
        </Fragment>
    );
};

export default Dashboard;