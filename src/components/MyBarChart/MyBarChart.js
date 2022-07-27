import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyBarChart = () => {
    const [data] = useChartData();
    return (
        <div>
            <h1 className='text-xl text-blue-700 font-semibold my-3'>Investment vs Revenue</h1>
            <BarChart width={300} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" ></Bar>
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" ></Bar>
                <XAxis dataKey="montn"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </BarChart>
        </div>
    );
};

export default MyBarChart;