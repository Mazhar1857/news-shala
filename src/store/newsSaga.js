import { call, put, takeEvery } from "redux-saga/effects";
import { newsAction } from "./newsSlice";

function* getFetchNews() {
    console.log('fetching')
    const news = yield call(() => fetch('https://newsdata.io/api/1/latest?apikey=pub_441927950bea6b0ac0b52b724237e7902c86e'));
    const formatedNews = yield news.json();
    console.log(formatedNews);
    yield put(newsAction.newsFetchSucess(formatedNews));
}

function* newsSaga() {
    console.log('watcher');
    yield takeEvery(newsAction.fetchNews, getFetchNews);
}

export default newsSaga;