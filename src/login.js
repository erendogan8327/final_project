import React from 'react';
import firebase from './database';
import './App.css';
import BasicForm from './form';
import ReactDOM from 'react-dom';

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        return ReactDOM.render(<BasicForm />, document.getElementById('root'))
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render() {
    return (
      <div className='form-group' style={{ textAlign: 'center' }}>
          <div>User E-Mail</div>
          <input id="email" placeholder="Enter your E-mail.." type="text"/>
          <div>User Password</div>
          <input id="password" placeholder="Enter your Password.." type="password" />
      
        <button id="submit" style={{margin: '10px'}} onClick={this.login}>Login</button>
        <button id="submit" style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

export default Login;