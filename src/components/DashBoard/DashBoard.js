import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';

const DashBoard = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-2 gap-5 mt-10'>
            <MyLineChart></MyLineChart>
            <MyAreaChart></MyAreaChart>
            <MyBarChart></MyBarChart>
            <MyPieChart></MyPieChart>
        </div>
    );
};

export default DashBoard;