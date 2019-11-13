import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
import About from './pages/about/about'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Admin}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/about' component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
