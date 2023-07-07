import { configureStore } from "@reduxjs/toolkit";
import coReduser from "../Features/Slice";

import dataReduser from "../Features/Slice/global";

const store = configureStore({
    reducer : {
        covid:coReduser,
        dataCovid:dataReduser,
    }
})

export default store;