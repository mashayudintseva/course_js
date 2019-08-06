import React from 'react';
import logo from './logo.png';
import './App.css';
import GothamPro from './fonts/GothamPro.ttf';
import GothamProM from './fonts/GothamPro-Medium.ttf';
import GothamProB from './fonts/GothamPro-Bold.ttf';
import GothamProL from './fonts/GothamPro-Light.ttf';
import ReactFontFace from 'react-font-face';

const fonts = {
  bold: {
    fontFamily: 'GothamPro Bold',
    fontWeight: 800,
  },
  medium: {
    fontFamily: 'GothamPro',
    fontWeight: 600,
  },
  standart: {
    fontFamily: 'Gotham Pro',
    fontWeight: 400,
  },
  light: {
    fontFamily: 'GothamPro',
    fontWeight: 200,
  }
}

class Main extends React.Component{
    constructor(props){
        super(props)
      }
      render(){
        return(
          <nav className="nav">
              <div className="container">
                <img src={logo} />
                <div className="button-block">
                  <button className="btn" style={fonts.medium}>Обратный звонок</button>
                </div>
                <div className="links right">
                    <p className="grey descript" style={fonts.standart}>
                    <a href="tel:+88003421333" className="link black" style={ fonts.bold }>8 800 342-13-33</a><br />
                      Бесплатный звонок по России</p>
                </div>
                
              </div>
          </nav>
        )
      }
} 
let fontConfig = {
  google: [
    'GothamPro',
    'GothamPro Medium',
    'GothamPro Light',
    'GothamPro Bold'
  ],
  file: [
    {
      fontFamily: 'GothamPro',
      fontStyle:  'normal',
      fontWeight: 400,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
      file: GothamPro,
      fontType: 'truetype',
      fileLocal: 'Gotham Regular'
    },
    {
      fontFamily: 'GothamPro Bold',
      fontStyle:  'bold',
      fontWeight: 800,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
      file: GothamProB,
      fontType: 'truetype',
      fileLocal: 'Gotham Bold'
    },
    {
      fontFamily: 'GothamPro Medium',
      fontStyle:  'medium',
      fontWeight: 600,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
      file: GothamProM,
      fontType: 'truetype',
      fileLocal: 'Gotham Medium'
    },
    {
      fontFamily: 'GothamPro Light',
      fontStyle:  'light',
      fontWeight: 200,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
      file: GothamProL,
      fontType: 'truetype',
      fileLocal: 'Gotham Light'
    }
  ],
}
export default ReactFontFace(Main, fontConfig);