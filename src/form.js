import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './database';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class BasicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  getUserData = () => {
    let ref = firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  writeUserData = () => {
    console.log(firebase)
    console.log(this.state)
    firebase.database()
      .ref("/")
      .set(this.state)
      .then((d) => console.log("hı", d))
      .catch(console.error);
    console.log("DATA SAVED");
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleApplicantChange = (event) => {
    this.setState({ applicant: event.target.value})
  }

  handleDescriptionChange = (event) => {
    this.setState({description: event.target.value})
  }

handleSubmit = (event) => {
  event.preventDefault();
  
  const projectName = this.refs.projectName.value;
  const Applicant = this.refs.Applicant.value;
  const description = this.refs.description.value;

  if (description && projectName && Applicant){
    const { developers } = this.state;
    
    this.setState({ developers });
  }
  else if (projectName && Applicant ) {
    const { developers } = this.state;
    developers.push({ description, projectName, Applicant })
    this.setState({ developers });
  }

  this.refs.projectName.value = '';
  this.refs.Applicant.value = '';
  this.refs.description.value = '';
}
  
  render() {
    const { developers } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1 className="form-group">Smart City Projects</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {developers.map(developer => (
                <div
                  key={developer.projectName}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.projectName}</h5>
                    <p className="card-text">{developer.Applicant}</p>
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1 className="form-group">Add new project here</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="projectName" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="projectName"
                      className="form-control"
                      placeholder="Name"
                      onChange={this.handleNameChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Applicant</label>
                    <input
                      type="text"
                      ref="Applicant"
                      className="form-control"
                      placeholder="Your Name & Surname"
                      onChange={this.handleApplicantChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label>Short Description</label>
                    <input
                      type="text"
                      ref="description"
                      className="form-control"
                      placeholder="description"
                      onChange={this.handleDescriptionChange}
                    />
                  </div>
                </div>
                <button onClick={this.writeUserData} type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<BasicForm />, document.getElementById('root'))

export default BasicForm;