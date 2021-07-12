import { all, put, takeEvery, call, takeLatest } from "redux-saga/effects";
import { fetchPost, addPostApi , editPostApi, deletePostsApi } from "../../../api/post";
import { GET_POST, setPosts } from "../action";
import { ADD_POST, addPosts } from "../action";
import { EDIT_POST, editPosts } from "../action";
import { DELETE_POST, deletePosts } from "../action";

function* getPosts() {
  const apiResponse = yield call(fetchPost);
  console.log("get api", apiResponse);
  yield put(setPosts(apiResponse.data));
  console.log("saga running");
}

function* addPostsSaga(payload) {
  console.log("here is payload", payload);
  const apiResponse = yield call(addPostApi, payload);
  console.log("post api", apiResponse);
  yield put(addPosts(apiResponse.data.body));
  console.log("saga running");
}

function* editPostsSaga(payload) {
  console.log("here is edit payload", payload);
  debugger
  const apiResponse = yield call(editPostApi, payload);
  console.log("edit api responces", apiResponse);
  debugger
  yield put(editPosts(apiResponse.data.body));
  console.log("saga running");
}


function* deletePostsSaga(payload) {
  console.log("deletePostsSaga running");
  debugger;
  const apiResponse = yield call(deletePostsApi, payload);
  console.log("delete api responce", apiResponse);
  debugger;
  yield put(deletePosts(apiResponse.data));
  console.log("deletePostsSaga running");
}

function* rootSaga() {
  yield takeLatest(GET_POST, getPosts);
  yield takeLatest(ADD_POST, addPostsSaga);
  yield takeLatest(EDIT_POST, editPostsSaga);
  yield takeLatest(DELETE_POST, deletePostsSaga);
}

export default rootSaga;
