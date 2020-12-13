import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
import Header from './common/header'
import Detail from './pages/detail'
import Home from './pages/home'


function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <BrowserRouter>
          <>
            <Route path='/' exact render={Home}></Route>
            <Route path='/detail' render={Detail}></Route>
          </>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
