import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      fromTable: ""
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleClickTable = (practionerID) => {
    this.setState({ fromTable: practionerID }, () => this.pushRouter()
    );
  }

  handleSubmit = (event) => {
    //get the typed value, see if it exists in the data.practionerID, if yes load into url "/patients/id"
    event.preventDefault();
    this.pushRouter();
  }

  pushRouter() {
    const data = this.props.patients;
    let typedId;
    if (this.state.value === "") {
      typedId = this.state.fromTable;
    } else {
      typedId = this.state.value;
    }
    //const typedId = this.state.fromTable
    function checkPid(id) {
      return id.practitionerId === typedId;
    }
    let newList = data.filter(checkPid);
    //console.log(newList);

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
          <div className="col mainbox">
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

        <div className="row" style={{ marginTop: '50px' }}>
          <table className="highlight">
            <thead>
              <tr>
                <th>ID del Medico</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.patients.slice(0, 5).map(item => {
                return (
                  <tr key={item.patientId}>
                    <td>{item.practitionerId}</td>
                    <td>
                      <button
                        className="btn waves-effect waves-light"
                        name="action"
                        onClick={() => {
                          this.handleClickTable(item.practitionerId);
                        }}
                      >
                        Ver Perfil Del Medico
                          <i className="material-icons right">send</i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

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
