import './App.css';
import Calculator from './components/calculator';
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <Calculator />
      </div>
    )
    }
}

export default App;
