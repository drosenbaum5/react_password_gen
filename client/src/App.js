import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/register' component={Register}>Register</Route>
          <Route path='/login' component={Login}>Login</Route>
          <Route path='/' component={Dashboard}>Home</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
