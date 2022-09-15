import React from 'react';
import ColorBox from './components/ColorBox';
import MycontextApi from './Components/MycontextApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: red,
      };
      this.handleClick = this.handleClick.bind(this);
      }
   handleClick = () => {
    this.setState((prevState) => ({color: prevState.color === 'yellow'}));
   }
  
      render() {
        const contexValue = {
          color: this.state.color,
          click: this.handleClick,
        }
    return (
      <MycontextApi.Provider value={contexValue}>
        <ColorBox color={this.state.color} click={this.handleClick} />
      </MycontextApi.Provider>
    );
  }
}
export default App;