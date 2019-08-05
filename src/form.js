import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class BasicForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: '',
      Applicant: '',
      nameError: '',
      ApplicantError: ''
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();
    });
  };

  handleApplicantChange = event => {
    this.setState({ Applicant: event.target.value }, () => {
      this.validateApplicant();
    });
  };

  validateName = () => {
    const { projectName } = this.state;
    this.setState({
      nameError:
        projectName.length > 3 ? null : 'Project Title must be longer than 3 characters'
    });
  }

  validateApplicant = () => {
    const { Applicant } = this.state;
    this.setState({
      ApplicantError:
        Applicant.length > 3 ? null : 'Description must be longer than 50 characters'
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { projectName, Applicant } = this.state;
    alert(`Your state values: \n 
            name: ${projectName} \n 
            Applicant: ${Applicant}`);
  };
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <p>Project Name</p>
          <input
            name='name'
            className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
            id='name'
            placeholder='Enter Project Name'
            value={this.state.projectName}
            onChange={this.handleNameChange}
            onBlur={this.validateName}
          />
          <div className='invalid-feedback'>{this.state.nameError}</div>
        </div>
        <div className='form-group'>
          <p>Applicant Name & Surname</p>
          <input
            name='Applicant'
            className={`form-control ${this.state.ApplicantError ? 'is-invalid' : ''}`}
            id='Applicant'
            placeholder='Enter Your Name & Surname please'
            value={this.state.Applicant}
            onChange={this.handleApplicantChange}
            onBlur={this.validateApplicant}
          />
          <div className='invalid-feedback'>{this.state.ApplicantError}</div>
        </div>
        <div className='form-group'>
        <p>Project Type</p>
    <select id="project-types" name="project-types">
      <option value="energy">Energy</option>
      <option value="innovation">Innovation</option>
      <option value="environment">Environment</option>
    </select>
        <button type='submit' className='btn btn-success btn-block' id="submit">
          Submit
        </button></div>
      </form>
    );
  }
}

ReactDOM.render(<BasicForm />, document.getElementById('root'))

export default BasicForm;