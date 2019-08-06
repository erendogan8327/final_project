import React from 'react';
import Home from './Home';
import fire from './database'
import Login from './login.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() 
  {
    return(
      <React.Fragment>
      <Home />
      
      </React.Fragment>
    );
  }
};

export default App;