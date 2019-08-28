import React, { PureComponent } from "react";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
//import * as d3 from "d3";

class Graph2 extends PureComponent {
  render() {
    console.log(this.props);

    const data = this.props.patient[0];

    const OldData = data.glucoseMesures;
    console.log("data", data.glucoseMesures);
    //we have to add the data into one array in order for Recharts to work
    /*     OldData.forEach(element => {
      element.ideal = [data.ranges.ideal.from, data.ranges.ideal.to];
      element.lowest = [data.ranges.low];
      element.highest = [data.ranges.high];
      element.times = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "00:00"];
      element.date = moment(element.date).format("DD/MM/YYYY HH:MM");
    });

    console.log("data.glucoseMesures.glucose", OldData.map(el => el.glucose)); */
    /*  const addData = { glucose: data.ranges.ideal.to, date: OldData[0].date };

    if (OldData.length !== 9) {
      if (OldData.length < 9) {
        OldData.push(addData);
      }
      if (OldData.length < 9) {
        OldData.push(addData);
      }
      if (OldData.length < 9) {
        OldData.push(addData);
      }
    } */

    const chartData = {
      type: "line",
      data: {
        /* labels: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "00:00"], */
        datasets: [
          {
            data: [
              {
                t: "2015-06-12T00:49:50+00:00",
                y: 185
              },
              {
                t: "2015-06-12T07:09:03+00:00",
                y: 177
              },
              {
                t: "2015-06-12T11:23:15+00:00",
                y: 58
              },
              {
                t: "2015-06-12T16:00:58+00:00",
                y: 110
              },
              {
                t: "2015-06-12T19:35:01+00:00",
                y: 97
              },
              {
                t: "2015-06-12T21:15:50+00:00",
                y: 142
              }
            ]
          }
        ],
        options: {
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  unit: "hour",
                  stepSize: 3,
                  min: "2015-06-12T00:00",
                  max: "2015-06-13T00:00",
                  displayFormats: {
                    hour: "HH:mm"
                  }
                }
              }
            ]
          }
        }
      }
    };

    return (
      <div>
        <h4 className="center">{this.props.patient[0].fullname}</h4>
        <h5 className="center">
          {this.props.patient[0].diabetesType.includes("1") ? "Tipo 1" : "Tipo 2"} &nbsp;&nbsp; Age: {<Moment diff={this.props.patient[0].dateOfBirth} unit="years" />} &nbsp;&nbsp; DOB: {<Moment format="DD/MM/YYYY">{this.props.patient[0].dateOfBirth}</Moment>}
          <br />
          <br />
        </h5>

        <Line data={chartData.data} options={chartData.data.options} />
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
export default connect(mapStateToProps)(Graph2);
