import React, { PureComponent } from "react";
import { ResponsiveContainer, ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import GraphData from "./graphData.json";
import { connect } from "react-redux";

class Graph extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9xopwa9v/";

  render() {
    console.log(this.props);
    return (
      <div>
        <h4 className="center">{this.props.patient[0].fullname}</h4>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={GraphData}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timeBlocks" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="ideal" fill="#8884d8" stroke="#8884d8" />
            <Line type="monotone" dataKey="glucose" stroke="#ff7300" />
            <Line type="monotone" dataKey="low" stackId="1" dot={false} stroke="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //we need to get the url id (/number) and match it to id of the data
  //we can obtain href url from the props.match
  let urlpatientId = ownProps.match.params.patientId;
  //we have to return an object in order to use the data
  console.log(urlpatientId);
  console.log(state.reducerPatients.patients[0].name);
  return {
    patient: state.reducerPatients.patients.filter(patient => patient.patientId === urlpatientId)
  };
};

//we create a higher order component to give PatientlList access to the redux store data
export default connect(mapStateToProps)(Graph);
