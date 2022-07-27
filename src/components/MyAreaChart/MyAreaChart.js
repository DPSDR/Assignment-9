import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyAreaChart = () => {
    const [data] = useChartData();
    return (
        <div>
            <h1 className='text-xl text-blue-700 font-semibold my-3'>Investment vs Revenue</h1>
            <AreaChart width={300} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" ></Area>
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" ></Area>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </AreaChart>
        </div>
    );
};

export default MyAreaChart;