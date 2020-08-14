import React from 'react';
import { BrowserRouter  as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';

import Nav from './components/Nav'
import Shopping from './pages/Shopping'
import Product from './pages/Product'
import Order from './pages/Order'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/shopping" component={Shopping}/>
          <Route path="/order" component={Order}/>
          <Route path="/product" component={Product}/>
          <Redirect to="/shopping"/>
        </Switch>
        <footer style={{height: '80px', lineHeight: '80px'}}>
          TW Mail @2018 Created by ForCheng
        </footer>
      </Router>
    </div>
  );
}

export default App;
