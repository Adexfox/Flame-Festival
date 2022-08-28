import React from 'react';
import ReactDOM from 'react-dom';
function Greeting () {
  return(
    <div>
      <FullName/>
      <Nationality />
    </div>

  );
}
const FullName = () => <h2>Adeola Adewale</h2>
const Nationality = () => <h3>Nigerian</h3>


 ReactDOM.render(<Greeting/>, document.getElementById('root'));
