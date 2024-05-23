import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: '',
    reducers: {
        category: (state, action) => {
            return action.payload;
        }
    }
})

export default categorySlice;
export const categoryAction = categorySlice.actions;