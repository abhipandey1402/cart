import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root', // the key used to store the state in storage
    storage, // the storage implementation (e.g., local storage, AsyncStorage)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;

