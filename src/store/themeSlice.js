import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'Light',
    reducers: {
        toggleTheme: (state) => {
            return state === 'Light' ? 'Dark' : 'Light';
        }
    }
})

export default themeSlice;
export const themeActions = themeSlice.actions