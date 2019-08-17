import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //get the typed value, see if it exists in the data.practionerID, if yes load into url "/patients/id"
    event.preventDefault();
    const data = this.props.patients;
    const typedId = this.state.value;
    function checkPid(id) {
      return id.practitionerId === typedId;
    }
    let newList = data.filter(checkPid);
    console.log(newList);

    if (newList.length) {
      this.props.history.push("/patients/" + typedId);
    } else {
      alert("Sorry, we cannot see a Practioner with that ID number, are you sure it's correct?");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col m6 m6 offset-m3 mainbox">
            <h4>Buscar Pacientes</h4>
            <p>Introduzca el ID del médico</p>

            <form onSubmit={this.handleSubmit}>
              <input type="text" name="practitionerID" value={this.state.value} onChange={this.handleChange} placeholder="ID de médico" />

              <button className="btn waves-effect waves-light" type="submit" name="action">
                Submit
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    patients: state.reducerPatients.patients
  };
};

//we use higher order functions to connect to the redux store
export default connect(mapStateToProps)(Home);
