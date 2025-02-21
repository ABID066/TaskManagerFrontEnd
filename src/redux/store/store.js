import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/setting-slice.js"
import taskReducer from "../state-slice/task-slice.js";
import summaryReducer from "../state-slice/summary-slice.js";
import profileReducer from "../state-slice/profile-slice.js";

export default configureStore({
    reducer:{
        settings: settingsReducer,
        task: taskReducer,
        summary: summaryReducer,
        profile: profileReducer
    }
});