import React from 'react';
import Home from './pages/Home';
import Nav from "./components/Nav";
import GameDetail from './pages/GameDetail';
import GlobalStyles from './components/GlobalStyle';
//Router
import { Route, Switch } from "react-router-dom";
import Footer from './components/Footer';

const App = () => {

    return (
        <div className="App">
            <GlobalStyles />
            <Nav />
            <Switch>
                <Route path='/ignite' exact>
                    <Home />
                </Route>
                <Route path='/games/:id' >
                    <GameDetail />
                </Route>
            </Switch>
            <Footer />
        </div >
    );
}


export default App;
