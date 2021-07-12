import { all, put, takeEvery, call, takeLatest } from "redux-saga/effects";
import { fetchPost, addPostApi, deletePostsApi } from "../../../api/post";
import { GET_POST, setPosts } from "../action";
import { ADD_POST, addPosts } from "../action";
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
function* deletePostsSaga(payload) {
  console.log("deletePostsSaga running");
  debugger;
  const apiResponse = yield call(deletePostsApi, payload);
  console.log("delete api responce", apiResponse);
  debugger;
  yield put(deletePosts(apiResponse.data));
  console.log("deletePostsSaga running");
}

export default function* rootSaga() {
  yield all([takeLatest(GET_POST, getPosts)]);
  yield all([takeLatest(ADD_POST, addPostsSaga)]);
  yield all([takeLatest(DELETE_POST, deletePostsSaga)]);
}
