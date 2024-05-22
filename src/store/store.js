import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import searchSlice from "./searchSlice";
import newsSlice from "./newsSlice";
import createSagaMiddleware from 'redux-saga'
import newsSaga from "./newsSaga";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        search: searchSlice.reducer,
        news: newsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),

});

saga.run(newsSaga);
export default store;