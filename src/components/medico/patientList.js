import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Moment from "react-moment";

class PatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(patientId) {
    //get current url and push patientId in order to trigger the react router to load the graph
    let currentUrl = this.props.location.pathname;
    this.props.history.push(currentUrl + "/" + patientId);
  }
  render() {
    console.log(this.props);

    return (
      <div className="container">
        <nav>
          <div className="nav-wrapper whiteBreadCrumbs">
            <div className="col s12">
              <NavLink exact to="/" className="breadcrumb">
                Buscar Pacientes
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col">
            <h4 className="center">Patient list ({this.props.patient.length})</h4>

            <table className="responsive-table highlight">
              <thead>
                <tr>
                  <th>NOMBRE DEL PACIENTE</th>
                  <th>FECHA DE NACIMIENTO</th>
                  <th>TIPO DE DIABETES</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {this.props.patient.map(pat => {
                  return (
                    <tr key={pat.patientId}>
                      <td>{pat.fullname}</td>
                      <td>
                        <Moment format="DD/MM/YYYY">{pat.dateOfBirth}</Moment>
                      </td>
                      <td>{pat.diabetesType.includes("1") ? "Tipo 1" : "Tipo 2"}</td>
                      <td>
                        <button
                          className="btn waves-effect waves-light"
                          name="action"
                          onClick={() => {
                            this.handleClick(pat.patientId);
                          }}
                        >
                          Ver Perfil Del Paciente
                          <i className="material-icons right">assessment</i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
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
