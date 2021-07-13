import {put, takeEvery, call} from "redux-saga/effects";
import {
  fetchPost,
  addPostApi,
  editPostApi,
  deletePostApi,
} from "../../../api/post";

import {
  GET_POSTS,
  setPosts,
  setPost,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  setRemovePost,
  setPostsLoader,
  updatePost

} from "../action";

function* getPosts() {
  yield put(setPostsLoader(true))
  const apiResponse = yield call(fetchPost);
  yield put(setPosts(apiResponse.data));
  yield put(setPostsLoader(false))
}

function* addPostSaga(payload) {
  const { post } = payload;
  const apiResponse = yield call(addPostApi, post);
  yield put(setPost(apiResponse.data.body));
}

function* editPostSaga(payload) {
  const apiResponse = yield call(editPostApi, payload);
  yield put(updatePost(apiResponse.data.body));
}

function* deletePostSaga(payload) {
  const apiResponse = yield call(deletePostApi, payload);
  yield put(setRemovePost(apiResponse.data));
}

function* rootSaga() {
  yield takeEvery(GET_POSTS, getPosts);
  yield takeEvery(ADD_POST, addPostSaga);
  yield takeEvery(EDIT_POST, editPostSaga);
  yield takeEvery(DELETE_POST, deletePostSaga);
}

export default rootSaga;
