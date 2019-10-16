import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import data from 'data.json';

export default class Example extends PureComponent {

  render() {
    return (
      <BarChart
        width={600}
        height={500}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
        <Bar dataKey="uv" fill="#ffc658" />
      </BarChart>
    );
  }
}
