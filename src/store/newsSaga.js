import { call, put, takeEvery, select } from "redux-saga/effects";
import { newsAction } from "./newsSlice";
import { searchAction } from "./searchSlice";

function* getFetchNews() {
    const category = yield select(state => state.category);
    const news = yield call(() => fetch(`https://newsdata.io/api/1/latest?apikey=pub_441927950bea6b0ac0b52b724237e7902c86e&language=en&category=${category}`));
    const statusCode = news.status;

    if (statusCode === 200) {
        const formatedNews = yield news.json();
        yield put(newsAction.newsFetchSucess(formatedNews));
    } else if (statusCode === 429) {
        yield put(newsAction.newsFetchFailure('you exceeded limit\nmax 30 request every 15 minutes and 200 request per day'))
    }
}

function* getSearchData() {
    const search = yield select(state => state.search);
    const news = yield call(() => fetch(`https://newsdata.io/api/1/latest?apikey=pub_441927950bea6b0ac0b52b724237e7902c86e&language=en&q=${search}`));

    const statusCode = news.status;

    if (statusCode == 200) {
        const formatedNews = yield news.json();
        yield put(newsAction.newsFetchSucess(formatedNews));
    } else if (statusCode == 429) {
        yield put(newsAction.newsFetchFailure('Exceeded max limit, 30 requests every 15 minutes or 200 request per day'))
    }
}

function* newsSaga() {
    yield takeEvery(newsAction.newsFetch, getFetchNews);
    yield takeEvery(searchAction.search, getSearchData);
}

export default newsSaga;