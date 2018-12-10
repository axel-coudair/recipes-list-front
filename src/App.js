import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import RecipesList from "./components/recipesList";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme'
import HousesList from './components/housesList';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { AUTHENTICATED } from './actions/types';
import './App.css'
import requireAuth from './hoc/require_auth';
import noRequireAuth from './hoc/no_require_auth';
import Home from "./components/home"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const user = localStorage.getItem('user');

if (user) {
    store.dispatch({ type: AUTHENTICATED });
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <MuiThemeProvider theme={theme}>
                        < div className="App">
                            <Header />
                            <div style={{ padding: 50 + 'px' }}>

                                <Switch>
                                    <Route exact path='/' component={noRequireAuth(Home)} />
                                    <Route exact path='/recipes' component={requireAuth(RecipesList)} />
                                    {/* <Route path='/houses' component={requireAuth(HousesList)} /> */}
                                </Switch>
                            </div>
                        </div>
                    </MuiThemeProvider>
                </BrowserRouter>
            </Provider>

        );
    }
}

export default App;
