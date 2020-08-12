import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Login from './components/LoginPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';

let store = configureStore();

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Switch>
          <Route path = "/" component = {MainPage}/>
          <Route path = "/login" component = {Login}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
