import React, { PureComponent } from "react";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

class Graph2 extends PureComponent {
  render() {
    console.log(this.props);
    const data = this.props.patient[0];
    const dataRanges = this.props.patient[0].ranges;
    //we have to add the data into one array in order to work
    data.glucoseMesures.forEach(element => {
      element.idealFrom = [dataRanges.ideal.from];
      element.idealTo = [dataRanges.ideal.to];
      element.lowest = [dataRanges.low];
      element.highest = [dataRanges.high];
    });
    console.log("data", data);
    console.log("ideal: ", [dataRanges.ideal.from, dataRanges.ideal.to]);

    const chartData = {
      data: {
        datasets: [
          {
            data: data.glucoseMesures.map(item => {
              return {
                t: item.date,
                y: item.glucose
              };
            }),
            fill: false,
            label: "Glucose",
            type: "line",
            backgroundColor: "black",
            borderColor: "black",
            borderWidth: 2,
            xAxisID: "time"
          },
          {
            data: data.glucoseMesures.map(item => {
              return {
                t: item.date,
                y: item.idealTo
              };
            }),

            label: "Ideal glucose level",
            type: "line",
            fill: 2,
            xAxisID: "idealTo",
            backgroundColor: "rgba(53, 191, 0,0.2)",
            borderColor: "rgba(53, 191, 0,0.2)",
            pointRadius: 0,
            borderWidth: 2
          },
          {
            data: data.glucoseMesures.map(item => {
              return {
                t: item.date,
                y: item.idealFrom
              };
            }),
            fill: false,
            label: "To",
            type: "line",
            xAxisID: "idealFrom",
            borderColor: "rgba(53, 191, 0,0.2)",
            pointRadius: 0,
            borderWidth: 0
          },
          {
            fill: false,
            label: "To",
            type: "line",
            backgroundColor: "black",
            borderColor: "black",
            borderWidth: 0,
            xAxisID: "meals",
            pointRadius: 0
          },
          {
            data: data.glucoseMesures.map(item => {
              return {
                t: item.date,
                y: item.highest
              };
            }),

            label: "Highest",
            type: "line",
            borderWidth: 2,
            borderColor: "green",
            fill: false,
            backgroundColor: "green",
            xAxisID: "highest",
            pointRadius: 0
          },
          {
            data: data.glucoseMesures.map(item => {
              return {
                t: item.date,
                y: item.lowest
              };
            }),

            label: "Lowest",
            type: "line",
            borderWidth: 2,
            borderColor: "red",
            fill: false,
            backgroundColor: "red",
            xAxisID: "lowest",
            pointRadius: 0
          }
          /*  {
            fill: false,
            label: "label",
            type: "line",
            backgroundColor: "black",
            borderColor: "black",
            borderWidth: 0,
            yAxisID: "glucemia",
            pointRadius: 0
          } */
        ],

        options: {
          scales: {
            xAxes: [
              {
                id: "time",
                type: "time",
                time: {
                  unit: "hour",
                  stepSize: 3,
                  min: moment(data.glucoseMesures[0].date).startOf("day"),
                  max: moment(data.glucoseMesures[0].date)
                    .startOf("day")
                    .add(1, "days"),
                  displayFormats: {
                    hour: "HH:mm"
                  }
                },
                gridLines: {
                  borderDash: [4, 6]
                },
                scaleLabel: {
                  display: true,
                  labelString: "Tiempo",
                  fontStyle: "bold",
                  fontSize: 14
                }
              },
              {
                id: "meals",
                position: "top",

                labels: ["", "Noche", "", "Desayuno", "", "Almuerzo", "", "Cena", ""],
                gridLines: {
                  borderDash: [4, 6]
                }
              },
              {
                id: "idealFrom",
                display: false
              },
              {
                id: "idealTo",
                display: false
              },
              {
                id: "highest",
                display: false
              },
              {
                id: "lowest",
                display: false
              }
            ],
            yAxes: [
              {
                gridLines: {
                  borderDash: [4, 6]
                },
                scaleLabel: {
                  display: true,
                  labelString: "Glucemia (mg/dL)",
                  fontStyle: "bold",
                  fontSize: 14,
                  padding: 20
                }
              }
            ]
          },

          legend: {
            labels: {
              filter: function(item, chart) {
                // Logic to remove a particular legend item goes here
                return !item.text.includes("To");
              }
            }
          },
          tooltips: {
            enabled: true,
            mode: "single",
            callbacks: {
              title: function(tooltipItems) {
                return moment(tooltipItems[0].xLabel).format("DD/MM/YYYY HH:MM");
              },
              label: function(tooltipItems) {
                return tooltipItems.yLabel;
              },

              afterTitle: function() {
                return "Glucemia:";
              },

              footer: function() {
                return " mg/dl";
              }
            },
            backgroundColor: "white",
            bodyFontColor: "black",
            titleFontColor: "grey",
            bodyFontSize: 30,
            bodySpacing: 10,
            displayColors: false,
            titleSpacing: 20,
            xPadding: 10,
            yPadding: 15,
            borderColor: "rgb(0, 148, 191)",
            borderWidth: 3,
            footerFontColor: "grey",
            footerSpacing: 0
          },
          ticks: {
            padding: 40
          }
        }
      }
    };

    console.log("min:", moment(data.glucoseMesures[0].date).startOf("day"));

    return (
      <div>
        <h4 className="center">{this.props.patient[0].fullname}</h4>
        <h5 className="center">
          {this.props.patient[0].diabetesType.includes("1") ? "Tipo 1" : "Tipo 2"} &nbsp;&nbsp; Age: {<Moment diff={this.props.patient[0].dateOfBirth} unit="years" />} &nbsp;&nbsp; DOB: {<Moment format="DD/MM/YYYY">{this.props.patient[0].dateOfBirth}</Moment>}
          <br />
          <br />
        </h5>

        <Line data={chartData.data} options={chartData.data.options} height={80} />
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
