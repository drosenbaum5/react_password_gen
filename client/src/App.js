import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import AuthContext, { AuthContextProvider } from './context/userContext';
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  return (
      <BrowserRouter>
          <div className="App">
            <AuthContextProvider >
              <Navigation />
              <Switch>
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/' component={Dashboard} />
              </Switch>
           </AuthContextProvider>
          </div>
      </BrowserRouter>
  );
}

export default App;