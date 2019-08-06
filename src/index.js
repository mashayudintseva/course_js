import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import * as serviceWorker from './serviceWorker';
import Button from './Button';
import Nav from './Nav'
import Header from './Header'
import Top from './TopNav'

class App extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <Nav />
                <Top />
                <Header />
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();