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
import './App.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

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
                                    <Route exact path='/' component={RecipesList} />
                                    {/* both /roster and /roster/:number begin with /roster */}
                                    <Route path='/houses' component={HousesList} />
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
