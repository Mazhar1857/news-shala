import { call, put, takeEvery, select } from "redux-saga/effects";
import { newsAction } from "./newsSlice";
import { searchAction } from "./searchSlice";

function* getFetchNews() {
    const category = yield select(state => state.category);
    const news = yield call(() => fetch(`https://newsdata.io/api/1/latest?apikey=pub_441927950bea6b0ac0b52b724237e7902c86e&language=en&category=${category}`));
    const formatedNews = yield news.json();
    yield put(newsAction.newsFetchSucess(formatedNews));
}

function* getSearchData() {
    const search = yield select(state => state.search);
    const news = yield call(() => fetch(`https://newsdata.io/api/1/latest?apikey=pub_441927950bea6b0ac0b52b724237e7902c86e&language=en&q=${search}`));
    const formatedNews = yield news.json();
    yield put(newsAction.newsFetchSucess(formatedNews));
}

function* newsSaga() {
    yield takeEvery(newsAction.newsFetch, getFetchNews);
    yield takeEvery(searchAction.search, getSearchData);
}

export default newsSaga;