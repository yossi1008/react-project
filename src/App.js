import React from 'react';
import Header from './component/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import User from './page/User'


function App() {
  return (
    <div className="App">
        <Router >
        <Header />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route  path="/user/:id" children={<User/>} />
              
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="*">
              <p>404見つかりませんでした。</p>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
