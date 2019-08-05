import React from 'react';
import BasicForm from './form.js';
import Home from './Home';


class App extends React.Component {
  render() 
  {
    return(
      <React.Fragment>
      <Home />
      <BasicForm />
      </React.Fragment>
    );
  }
};

export default App;