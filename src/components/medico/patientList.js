import React, { Component } from "react";
import { connect } from "react-redux";

class PatientList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="post">
        <h4>Patient list</h4>
        <h4 className="center">{this.props.patient.fullname}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //we need to get the url id (/number) and match it to id of the data
  //we can obtain href url from the props.match
  let urlPractitionerId = ownProps.match.params.practitionerId;
  //we have to return an object in order to use the data
  //we have to
  console.log(urlPractitionerId);
  console.log(state.reducerPatients.patients[0].name);

  return {
    patient: state.reducerPatients.patients.find(patient => patient.practitionerId === urlPractitionerId)
  };
};

//create a higher order component to give Patientlist access to the redux store
export default connect(mapStateToProps)(PatientList);
