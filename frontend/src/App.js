import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Login from './components/LoginPage';

let store = configureStore();

function App() {
  return (
    <Provider store = {store}>
      <Login />
    </Provider>
  );
}

export default App;
