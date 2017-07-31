  import tablesSagas from './sagas';

export default function* rootSaga() {
  yield [
    ...tablesSagas,
  ];
}
