import React, { Component } from "react";
import { connect } from "react-redux";

class PatientList extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="post">
        <h4 className="center">Patient list ({this.props.patient.length})</h4>

        {this.props.patient.map(pat => {
          return (
            <div>
              <p className="center">{pat.fullname}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //we need to get the url id (/number) and match it to id of the data
  //we can obtain href url from the props.match
  let urlPractitionerId = ownProps.match.params.practitionerId;
  //we have to return an object in order to use the data
  console.log(urlPractitionerId);
  console.log(state.reducerPatients.patients[0].name);
  return {
    patient: state.reducerPatients.patients.filter(patient => patient.practitionerId === urlPractitionerId)
  };
};

//we create a higher order component to give PatientlList access to the redux store data
export default connect(mapStateToProps)(PatientList);
