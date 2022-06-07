import {put, takeEvery, call} from "redux-saga/effects";
import * as api from "../../../api/post";
import * as action from "../action";

function* getPosts() {
  yield put(action.setPostsLoader(true))
  const apiResponse = yield call(api.fetchPost);
  yield put(action.setPosts(apiResponse.data));
  yield put(action.setPostsLoader(false))
}

function* addPostSaga(payload) {
  const { post } = payload;
  const apiResponse = yield call(api.addPostApi, post);
  yield put(action.setPost(apiResponse.data.body));
}

function* editPostSaga(payload) {
  const apiResponse = yield call(api.editPostApi, payload);
  yield put(action.updatePost(apiResponse.data.body));
}

function* deletePostSaga(payload) {
  const apiResponse = yield call(api.deletePostApi, payload);
  yield put(action.setRemovePost(apiResponse.data));
}

function* rootSaga() {
  yield takeEvery(action.GET_POSTS, getPosts);
  yield takeEvery(action.ADD_POST, addPostSaga);
  yield takeEvery(action.EDIT_POST, editPostSaga);
  yield takeEvery(action.DELETE_POST, deletePostSaga);
}

export default rootSaga;
