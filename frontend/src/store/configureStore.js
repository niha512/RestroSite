import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducer/rootReducer';

export default function configureStore() {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        let store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));
        return store;
}