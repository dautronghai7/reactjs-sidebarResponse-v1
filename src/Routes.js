import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/MainView/Home'
import About from './components/MainView/About'
import Blog from './components/MainView/Blog'
import Contacts from './components/MainView/Contacts'
import Destinations from './components/MainView/Destinations'
import Country from './components/MainView/Destinations/Country'
import Services from './components/MainView/Services'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={Home} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/contacts' component={Contacts} />
            <Route exact path='/destinations' component={Destinations} />
            <Route exact path='/destinations/:country' component={Country} />
            <Route exact path='/services' component={Services} />
        </Switch>
    )
}

export default Routes
