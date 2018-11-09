import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import RecipesList from "./components/recipesList";
import LoginButtonModal from "./components/loginButtonModal";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme'

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    < div className="App">
                        <Header />
                        <Switch>
                            <Route exact path='/' component={RecipesList} />
                            {/* both /roster and /roster/:number begin with /roster */}
                            <Route path='/roster' component={LoginButtonModal} />
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>

        );
    }
}

export default App;
