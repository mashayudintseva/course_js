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
          <header className="header main">
              <div className="container">
                  <div className="flex center" style={{height: 550 +'px'}}>
                    <h1 className="ttu headline white" style={fonts.bold}>быстрая Доставка</h1>
                    <p className="left main-desc white" style={fonts.light}>бетона, щебня, песка и других нерудных материалов по Москве и Московской области</p>
                    <div className="flex row">
                        <button className="yellow btn" style={fonts.medium}>Подробнее о доставке</button>
                        <p className="catalog grey" style={fonts.medium}>или <a href="#" className="grey" style={fonts.medium}>перейти в каталог</a></p>
                    </div>
                  </div>
            </div>
          </header>
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