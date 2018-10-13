import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import RecipesList from "./components/recipesList";

class App extends Component {
    render() {
        return (
            < div className="App">
                <Header/>
                <RecipesList/>
            </div>
        );
    }
}

export default App;
