import React, { Component } from "react";
import { LineChart, Line } from "recharts";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = [
      { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 100, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 1000, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 2400, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 400, pv: 2400, amt: 2400 }
    ];

    const renderLineChart = (
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    );

    return <div>{renderLineChart}</div>;
  }
}

export default Graph;
