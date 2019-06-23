import { configureStore } from "redux-starter-kit";
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'

import { rootReducer } from "./reduxStore";
import sagas from "./sagas";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagas.forEach(saga => sagaMiddleware.run(saga));

const persistor = persistStore(store);

export { store, persistor };
