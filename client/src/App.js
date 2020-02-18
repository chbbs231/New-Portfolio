import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
//Import for pages
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
//Import for components
import Nav from './components/Nav'

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path ="/">
          <About/>
        </Route>
        <Route path= "/portfolio">
          <Portfolio/>
        </Route>
        <Route path= "/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
