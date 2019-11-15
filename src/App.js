import React from 'react';
import './App.css';
import {Route, Router} from 'react-router-dom';
import Home from './components/Home/Home.js'
import Adopt from './components/Adopt/Adopt.js'
import Help from './components/Help/Help.js'
import PetPage from './components/PetPage/PetPage'
import history from './history'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path='/' component={Home} />
        <Route exact path='/adopt' component={Adopt} />
        <Route exact path='/help' component={Help} />
        <Route exact path='/adopt/:id' component={PetPage} />
      </Router>
    </div>
  );
}

export default App;

