import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import MoviePage from './components/MoviePage'
import NominatedPage from './components/NominatedPage'

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path = "/ShopifyChallenge" component = {Home}></Route>
            <Route exact path = "/ShopifyChallenge/movies" component = {MoviePage}></Route>
            <Route exact path = "/ShopifyChallenge/nominated" component = {NominatedPage}></Route>
        </Switch>
    </div>
)

export default MainRouter;