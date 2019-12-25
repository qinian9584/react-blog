import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
import About from './pages/about/about'
import Scheme from './pages/scheme/scheme'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/about' component={About}></Route> 
        <Route path='/scheme' component={Scheme}></Route> 
        <Route path='/' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
