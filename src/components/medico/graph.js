import React, { PureComponent } from "react";
import { ResponsiveContainer, ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import GraphData from "./graphData.json";
import { connect } from "react-redux";

class Graph extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9xopwa9v/";

  render() {
    console.log(this.props);

    const data = this.props.patient[0];
    const OldData = data.glucoseMesures;
    console.log(OldData);
    OldData.forEach(element => {
      element.ideal2 = [data.ranges.ideal.from, data.ranges.ideal.to];
    });

    /* const newData = Object.assign(OldData, data.ranges);
    newData.push({ ideal2: [data.ranges.ideal.from, data.ranges.ideal.to] });

    console.log("newData ", newData); */
    return (
      <div>
        <h4 className="center">{this.props.patient[0].fullname}</h4>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={OldData}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis padding={{ left: 0, right: 0 }} />
            <Tooltip />
            <Legend />

            <Area type="monotone" dataKey="ideal2" fill="#8884d8" stroke="#8884d8" />
            <Line type="monotone" dataKey="glucose" stroke="#ff7300" />
            <Line type="monotone" dataKey="" stackId="1" dot={false} stroke="red" />
          </ComposedChart>
        </ResponsiveContainer>

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
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Area type="monotone" dataKey="ideal" fill="#8884d8" stroke="#8884d8" />
            <Line type="monotone" dataKey="glucose" stroke="#ff7300" />
            <Line type="monotone" dataKey="" stackId="1" dot={false} stroke="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //obtain patient id in url
  let urlpatientId = ownProps.match.params.patientId;
  //check we have it
  console.log(urlpatientId);
  console.log(state.reducerPatients.patients[0].name);
  // get the data for the patient with that id
  return {
    patient: state.reducerPatients.patients.filter(patient => patient.patientId === urlpatientId)
  };
};

//add the patient data as a prop, using connect as a higher order component
export default connect(mapStateToProps)(Graph);
