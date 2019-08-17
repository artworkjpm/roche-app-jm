import React, { PureComponent } from "react";
import { ResponsiveContainer, ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "00:00",
    uv: 590,
    pv: 1800,
    amt: [65, 103],
    cnt: 1000
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: [65, 103],
    cnt: 1000
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: [65, 103],
    cnt: 1000
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: [65, 103],
    cnt: 1000
  },
  {
    name: "Page E",
    uv: 1820,
    pv: 1108,
    amt: [65, 103],
    cnt: 1000
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: [65, 103],
    cnt: 1000
  }
];

export default class Graph extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9xopwa9v/";

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
