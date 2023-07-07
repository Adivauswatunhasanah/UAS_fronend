// import {createSlice} = 

import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const coSlice = createSlice({
    name: 'covid',
    initialState: {
        covid: data.provinces,
    },
    reducers: {
        addCovid(state, action) {
            state.covid = action.payload;
        }
    }

});
const {addCovid} = coSlice.actions;
const coReduser = coSlice.reducer;

export default coReduser;
export {addCovid}
