import { all, put, takeEvery, call } from "redux-saga/effects";
import { fetchUser } from "../../../api/user";
import { GET_USER, setUser } from "../action";

function* getUsers() {
  const apiResponse = yield call(fetchUser);
  console.log("user", apiResponse);
  yield put(setUser(apiResponse.data));
  console.log("saga running");
}

export default function* rootSaga() {
  yield all([takeEvery(GET_USER, getUsers)]);
}
