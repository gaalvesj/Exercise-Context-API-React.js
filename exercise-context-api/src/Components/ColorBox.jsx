
import React from 'react';
import MycontextApi from './MycontextApi';
import '../styles/box.css';


class ColorBox extends React.Component {
  render() {
    return(
        <MycontextApi.Consumer>
        {value => console.log(value)}
      </MycontextApi.Consumer>
    )
  }
}
export default ColorBox;