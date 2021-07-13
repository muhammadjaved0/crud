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
  SET_POST,
  addPost,
  EDIT_POST,
  editPost,
  DELETE_POST,
  deletePost,
  setPostsLoader

} from "../action";

function* getPosts() {
  yield put(setPostsLoader(true))
  const apiResponse = yield call(fetchPost);
  console.log("get api", apiResponse);
  yield put(setPosts(apiResponse.data));
  yield put(setPostsLoader(false))
  console.log("saga running");
}

function* addPostSaga(payload) {
  console.log("here is payload", payload);
  const { post } = payload;
  const apiResponse = yield call(addPostApi, post);
  console.log("post api", apiResponse);
  yield put(setPost(apiResponse.data.body));
  console.log("saga running");
}

function* editPostSaga(payload) {
  console.log("here is edit payload", payload);
  const apiResponse = yield call(editPostApi, payload);
  console.log("edit api responces", apiResponse);
  yield put(editPost(apiResponse.data.body));
  console.log("saga running");
}

function* deletePostSaga(payload) {
  console.log("deletePostsSaga running");
  debugger;
  const apiResponse = yield call(deletePostApi, payload);
  console.log("delete api responce", apiResponse);
  debugger;
  yield put(deletePost(apiResponse.data));
  console.log("deletePostsSaga running");
}

function* rootSaga() {
  yield takeEvery(GET_POSTS, getPosts);
  yield takeEvery(ADD_POST, addPostSaga);
  yield takeEvery(EDIT_POST, editPostSaga);
  yield takeEvery(DELETE_POST, deletePostSaga);
}

export default rootSaga;
