import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';


const MyLineChart = () => {
    const [data] = useChartData();
    return (
        <div>
            <h1 className='text-xl text-blue-700 font-semibold my-3'>Month Wise Sell</h1>
            <LineChart width={300} height={300} data={data}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }}></Line>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </LineChart>
        </div>
    );
};

export default MyLineChart;