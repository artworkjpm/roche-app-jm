import React, { PureComponent } from "react";
import Moment from "react-moment";
import moment from "moment";
import { ResponsiveContainer, ComposedChart, Line, LineChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from "recharts";
//import GraphData from "./graphData.json";
import { connect } from "react-redux";
//import * as d3 from "d3";

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
      element.date = moment(element.date).format("DD/MM/YYYY HH:MM");
    });

    const CustomTooltip = ({ active, payload, label }) => {
      if (active) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${label} : ${payload[3].value}`}</p>
            <p className="intro">test</p>
            <p className="desc">Anything you want can be displayed here.</p>
          </div>
        );
      }

      return null;
    };

    const customLabel = () => {
      return (
        <text x={40} y={10} dy={0} width="100%" fill="#000000">
          Hora de acostartse
        </text>
      );
    };

    return (
      <div>
        <h4 className="center">{this.props.patient[0].fullname}</h4>
        <h5 className="center">
          {this.props.patient[0].diabetesType.includes("1") ? "Tipo 1" : "Tipo 2"} &nbsp;&nbsp; Age: {<Moment diff={this.props.patient[0].dateOfBirth} unit="years" />} &nbsp;&nbsp; DOB: {<Moment format="DD/MM/YYYY">{this.props.patient[0].dateOfBirth}</Moment>}
          <br />
          <br />
        </h5>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={OldData}
            margin={{
              top: 30,
              right: 20,
              left: 20,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" label={customLabel} />

            <YAxis label={{ value: "Glucemia (mg/dL)", angle: -90, position: "insideLeft", textAnchor: "middle" }} />
            <Tooltip dataKey="date" />
            <Legend />

            <Area type="monotone" dataKey="ideal" fill="#a0db78" dot={false} stroke="#a0db78" />
            <Line type="monotone" dataKey="glucose" stroke="#000000" />
            <Line type="monotone" name="lowest" dataKey="lowest" dot={false} stroke="red" label="lowest">
              <Label value="Lowest" position="top" />
            </Line>
            <Line type="monotone" name="highest" dataKey="highest" dot={false} stroke="green" />
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
