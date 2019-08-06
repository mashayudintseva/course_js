import React from 'react';
import logo from './logo.png';
import './App.css';
import GothamProB from './fonts/GothamPro-Bold.ttf';
import ReactFontFace from 'react-font-face';

const fonts = {
  bold: {
    fontFamily: 'GothamPro',
    fontWeight: 800,
  }
}

class Main extends React.Component{
    constructor(props){
        super(props)
      }
      render(){
        return(
            <div className="container" style={{position: 'relative', height: 10 + 'px'}}>
                <ul className="ul">
                    <li className="item-menu"><a href="#" className="black" style={fonts.bold}>Главная</a></li>
                    <li className="item-menu"><a href="#" className="black" style={fonts.bold}>Каталог</a></li>
                    <li className="item-menu"><a href="#" className="black" style={fonts.bold}>Услуги</a></li>
                    <li className="item-menu"><a href="#" className="black" style={fonts.bold}>Доставка</a></li>
                    <li className="item-menu"><a href="#" className="black" style={fonts.bold}>О компании</a></li>
                    <li className="item-menu"><a href="#" className="black" style={fonts.bold}>Контакты</a></li>
                </ul>
            </div>
        )
      }
} 
let fontConfig = {
  google: [
    'GothamPro Bold'
  ],
  file: [
    {
      fontFamily: 'GothamPro Bold',
      fontStyle:  'bold',
      fontWeight: 800,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
      file: GothamProB,
      fontType: 'truetype',
      fileLocal: 'GothamPro Bold'
    }
  ],
}
export default ReactFontFace(Main, fontConfig);