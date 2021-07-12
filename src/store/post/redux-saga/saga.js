import { all, put, takeEvery, call, takeLatest } from "redux-saga/effects";
import { fetchPost ,addPostApi} from "../../../api/post";
import { GET_POST ,  setPosts } from "../action";
import { ADD_POST ,  addPosts } from "../action";

function* getPosts() {
  const apiResponse = yield call(fetchPost);
  console.log("get api", apiResponse);
  yield put(setPosts(apiResponse.data));
  console.log("saga running");
}

function* addPostsSaga(payload) {
  console.log("here is payload" , payload)
  const apiResponse = yield call(addPostApi,payload);
  console.log("post api", apiResponse);
  yield put(addPosts(apiResponse.data.body));
  console.log("saga running");
}


export default function* rootSaga() {
  yield all([takeLatest(GET_POST, getPosts)]);
  yield all([takeLatest(ADD_POST, addPostsSaga)]);
}
