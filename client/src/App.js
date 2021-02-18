import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import Navbar from './components/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import UserContext from './context/userContext';
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const isLoggedIn = async () => {
      console.log("Running isLoggedIn() Method...")
      let token = localStorage.getItem('auth-token');
      if(!token) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      // Send Request to Backend
      let tokenRes = await Axios.get('/api/validate-token', 
        { 
          headers: {
            "x-auth-token": token
          }
      });

      console.log(tokenRes.data);
      if(tokenRes.data) {
        const userRes = await Axios.get('/api/user', { headers: { "x-auth-token": token } });
        setUserData({
          token, 
          user: userRes.data
        })
      }

    }
    isLoggedIn();
  }, []);

  return (
    <BrowserRouter>
    <UserContext.Provider value={{ userData, setUserData }}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Dashboard} />
        </Switch>
      </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}


export default App;
