// Import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
  return 'Click on me!';}


//Create a react component
const App= () =>{
  
  return (
    
    <div>
      <label htmlFor="name" className="label">Enter name:</label>
      <input type="text" id="name" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
    </div>
  );
}


//Take the react compnent and show it on the screen

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);  