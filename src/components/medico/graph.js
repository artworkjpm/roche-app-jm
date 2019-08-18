import React, { PureComponent } from "react";
import { ResponsiveContainer, ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
//import GraphData from "./graphData.json";
import { connect } from "react-redux";

class Graph extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9xopwa9v/";

  render() {
    console.log(this.props);

    const data = this.props.patient[0];
    const OldData = data.glucoseMesures;
    console.log(OldData);
    //we have to add the data into one array in order for Recharts to work
    OldData.forEach(element => {
      element.ideal = [data.ranges.ideal.from, data.ranges.ideal.to];
      element.lowest = [data.ranges.low];
      element.highest = [data.ranges.high];
      element.times = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "00:00"];
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
            <XAxis
              hide="true"
              dataKey="times"
              padding={{
                right: 0,
                left: 0
              }}
            />
            <YAxis />
            <Tooltip />
            <Legend />

            <Area type="monotone" dataKey="ideal" fill="#a0db78" dot={false} stroke="#a0db78" />
            <Line type="monotone" dataKey="glucose" stroke="#000000" />
            <Line type="monotone" dataKey="lowest" dot={false} stroke="red" />
            <Line type="monotone" dataKey="highest" dot={false} stroke="green" />
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
