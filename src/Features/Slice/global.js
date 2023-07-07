// import {createSlice} = 

import { createSlice } from "@reduxjs/toolkit";
// import data from "../../utils/constants/provinces";
// import ENPOINTS from "../../utils/constants/enpoints";

const dataSlice = createSlice({
    name: 'dataCovid',
    initialState: {
        dataCovid: [],
    },
    reducers: {
        addData(state, action) {
            state.dataCovid = action.payload;
        }
    }

});
const dataReduser = dataSlice.reducer;
const {addData} = dataSlice.actions;

export {addData}
export default dataReduser;
