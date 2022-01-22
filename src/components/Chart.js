import React,{Component} from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Staff TurnOver', value: 3.1 },
    { name: 'SickNess Absence', value: 10.6 },
    { name: 'Reduced Productivity At Work', value: 21.2 },
  ];
  
  

export default class Chart extends Component {
      render(){
  return (
    <div className="page">
      <h1>Chart</h1>
      <h5>The Business Costs of mental ill health at work.</h5>
      <div className="chart">
          <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        
    </div>
    </div>  );
  }
}
