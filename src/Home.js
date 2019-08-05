import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BasicForm from './form';
import './App.css';


function Example() {
    return (
        ReactDOM.render(<BasicForm />, document.getElementById('root'))
    );
  }

class Home extends React.Component {
    render() {
        return (
            <div>
            <Container>
                <Row className="justify-content-md-center">
               <Col><h1> ADD A PROJECT </h1>
                <button onClick={Example}>
                    <img src="https://cnet3.cbsistatic.com/img/t-_OMBeHeeC8IK15XX_jxfKJz2w=/1600x900/2018/05/04/1ef4177a-6eb6-40e2-980f-fdb9e50dea51/sf-smart-home-5-2-18-7336.jpg" alt="smart-project" 
                    height="360" width="480"></img></button> </Col> 
                <Col>     <h1> BROWSE PROJECTS</h1>
              <a href="./form.js">
                    <img src="https://www.oracle.com/assets/c83-ppm-smart-city-2774103.jpg" alt="smart-project" 
                    height="360" width="480"></img></a> </Col> 
                </Row>
            </Container>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('root'))

export default Home;