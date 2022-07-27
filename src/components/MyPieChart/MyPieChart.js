import React from 'react';
import { PieChart, Pie } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyPieChart = () => {
    const [data] = useChartData();
    return (
        <div>
            <PieChart width={400}>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
};

export default MyPieChart;