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
               <Col>
                <button onClick={Example}>
                    <img src="https://st2.depositphotos.com/1092019/11244/i/950/depositphotos_112443312-stock-photo-hand-drawn-new-project-on.jpg" alt="smart-project" 
                    height="360" width="480"></img></button> </Col> 
                <Col>     
              <a href="./form.js">
                    <img src="https://i.ytimg.com/vi/KVIqrUz76jw/hqdefault.jpg" alt="smart-project" 
                    height="360" width="480"></img></a> </Col> 
                </Row>
            </Container>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('root'))

export default Home;