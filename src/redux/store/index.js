import { persistStore, persistReducer } from 'redux-persist'
import { createStore } from 'redux';
import reducers from '../reducers';
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)

export const persistor = persistStore(store)


export default store
