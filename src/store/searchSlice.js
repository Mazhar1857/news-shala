import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        search: (state, action) => {
            return action.payload;
        }
    }
})

export default searchSlice;
export const searchAction = searchSlice.actions