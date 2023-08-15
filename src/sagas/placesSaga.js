import { put, takeLatest, all } from 'redux-saga/effects';
import { ADD_PLACE } from '../actions/placesActions';

function* watchAddPlace() {
  yield takeLatest(ADD_PLACE, addToSearchHistory);
}

function* addToSearchHistory(action) {
  yield put({ type: ADD_PLACE, place: action.place });
}

export default function* rootSaga() {
  yield all([watchAddPlace()]);
}
