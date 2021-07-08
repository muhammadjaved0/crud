import { all, put, takeEvery, call } from "redux-saga/effects";
import { fetchPost} from "../../../api/post";
import { GET_POST ,  setPosts } from "../action";

function* getPosts() {
  const apiResponse = yield call(fetchPost);
  console.log("user", apiResponse);
  yield put(setPosts(apiResponse.data));
  console.log("saga running");
}

export default function* rootSaga() {
  yield all([takeEvery(GET_POST, getPosts)]);
}
