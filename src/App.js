import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home"
import MovieDetails from './Components/MovieDetails'
import Header from './Components/Header'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
        <Route path="/" component={Home} exact />
          <Route path="/moviedetail/:id">
            <MovieDetails />
          </Route>
          
          {/* <Route path="*" component={ErrorPage} /> */}
        </Switch>
        <Footer />
      </Router>

    </div>
  )
}

export default App