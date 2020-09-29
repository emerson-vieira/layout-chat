import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Page2 from './pages/Page2';


import GlobalStyles from './styles/GlobalStyles';

function App() {
    return (
        <BrowserRouter basename={'/Athenas/athenasr/ChatTest/'}>
            <GlobalStyles />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/page2">
                    <Page2 />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
