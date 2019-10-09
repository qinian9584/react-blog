import React,{Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import About from './pages/about/about'

export default class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Admin}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/about' component={About}></Route>
          </Switch>
        </BrowserRouter>
      )
  }
}
