import React from 'react';
import './App.css';
import Title from './components/title/title';
import Selector from './components/selector/selector';
import CalcContainer from './components/calculators/calc-container';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      calc: 'elev-press'
    };
  };

  componentDidMount() {
    const elevPress = document.getElementById('elev-press');
    elevPress.style.backgroundColor = '#FFFFFF';
    elevPress.style.padding = '15px 15px';
    elevPress.style.margin = '-15px';
    elevPress.style.borderRadius = '10px';
    elevPress.style.boxShadow = '5px 5px rgba(0,0,0,0.2);';
  }

  select = (e) => {
        
    const selectors = [
        document.getElementById('elev-press'), 
        document.getElementById('orif-dis'), 
        document.getElementById('pipe-vol'), 
        document.getElementById('sprink-dis'), 
        document.getElementById('press-loss')
    ];
    
    selectors.forEach(element => {
        element.style.backgroundColor = 'revert';
        element.style.padding = 'revert';
        element.style.margin = 'revert';
        });

    e.target.style.backgroundColor = '#FFFFFF';
    e.target.style.padding = '15px 15px';
    e.target.style.margin = '-15px';
    e.target.style.borderRadius = '10px';
    e.target.style.boxShadow = '5px 5px rgba(0,0,0,0.2);';

    this.setState({calc:`${e.target.id}`})
};


  render() {
    return (
      <div id='App'>
        <Title />
        <div id='calculators'>
          <Selector changeCalc={this.select} />
          <CalcContainer calcDisplay={this.state.calc}/>
        </div>
      </div>
    )
  }
}

export default App;
