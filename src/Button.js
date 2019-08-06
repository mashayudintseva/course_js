import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component{
    constructor(props){
        super(props)
        this.myClick = this.myClick.bind(this)
        this.randomInteger = this.randomInteger.bind(this)
    }
    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
    myClick(){
        const colors = ['#aad5e8', '#ad9ebf', '#fbc117', '#4b789e', '#c5a1c5', '#bfe8a2'];
        let random = this.randomInteger(1, colors.length);
        document.getElementsByClassName('wrapper')[0].style.backgroundColor = colors[random];
    }

    render(){
        return(
            <button onClick={this.myClick} className="clicker"> Изменить дизайн </button>
        )
    }
}

export default Button;