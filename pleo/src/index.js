import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducers = persistReducer(persistConfig, reducers)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persistedReducers,
    composeEnhancer(applyMiddleware(thunk)),
);
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'));