import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child'
import ChildOne from './ChildOne'

function App() {

  const [count , setCount] = React.useState(0)

  const childCallback = (value) =>{
    setCount(value)
  }
  return (
    <div className="App">
      Count From Child 1 - {count}
      <br/>
      <Child childCallback = {childCallback} hello= "Parent"/>
      <br/>
      <ChildOne value={count}/>
    </div>
  );
}

export default App;
