import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: {},
        isLoading: false
    },
    reducers: {
        newsFetch: (state) => {
            state.isLoading = true;
        },
        newsFetchSucess: (state, action) => {
            state.news = action.payload;
            state.isLoading = false;
        },
        newsFetchFailure: () => {
            state.isLoading = false;
        }
    }
})

export default newsSlice;
export const newsAction = newsSlice.actions