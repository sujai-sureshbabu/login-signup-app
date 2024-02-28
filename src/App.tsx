import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/login/Signup'
import SignUp from './components/login/Signup';
import { Link} from 'react-router-dom';
import Main from './Main';
import ResponsiveAppBar from './components/common/header';

function App() {
  return (
    <div className="App">  
          <ResponsiveAppBar></ResponsiveAppBar>
          <Main />             
    </div>
  );
}

export default App;
