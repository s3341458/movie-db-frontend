import { configureStore } from "redux-starter-kit";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reduxStore";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
