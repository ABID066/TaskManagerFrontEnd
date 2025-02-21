import Swal from "sweetalert2";
import { StatusUpdate } from "../APIRequest/APIRequest.js";

export async function UpdateAlert(id, status) {
    const result = await Swal.fire({
        title: "Change Status",
        input: "select",
        inputOptions: {
            "New": "New",
            "In Progress": "In Progress",
            "Completed": "Completed",
            "Canceled": "Canceled"
        },
        inputValue: status,
        showCancelButton: true,
        confirmButtonText: "Update",
        cancelButtonText: "Cancel"
    });

    if (result.isConfirmed && result.value !== status) {
        return await StatusUpdate(id, result.value);
    }
}
