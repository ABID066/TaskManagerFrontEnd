import {useRef} from "react";
import { Container, Row } from "react-bootstrap";
import {ErrorToast, IsEmpty} from "../../helper/FormHelper.js";
import {NewTaskRequest} from "../../APIRequest/APIRequest.js";
import {useNavigate} from "react-router-dom";

const Create = () => {

    let titleRef = useRef();
    let descriptionRef = useRef();
    const navigate = useNavigate();

    const CreateNew = async ()=> {
        let title = titleRef.current.value;
        let description = descriptionRef.current.value;
        if(IsEmpty(title)){
            ErrorToast("Title required!")
        }
        else if(IsEmpty(description)){
            ErrorToast("Description required!")
        }
        else {
            const result = await NewTaskRequest(title, description)
            if (result === true) {
                //window.location.href = "/all";
                navigate("/all")
            }
        }
    }

    return (
        <Container fluid={true} className="content-body ">
            <Row className="d-flex justify-content-center">
                <div className="col-12 col-lg-8 col-sm-12 col-md-8 p-2">
                    <div className="card">
                        <div className="card-body animated fadeInUp">
                            <h4>Create New</h4>
                            <br />
                            <input
                                ref={titleRef}
                                placeholder="Task Name"
                                className="form-control animated fadeInUp"
                                type="text"
                            />
                            <br />
                            <textarea
                                ref={descriptionRef}
                                rows={5}
                                placeholder="Task Description"
                                className="form-control animated fadeInUp"
                            ></textarea>
                            <br />
                            <button onClick={CreateNew} className="btn float-end animated fadeInUp btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Create;
