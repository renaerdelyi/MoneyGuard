import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { currency: 'USD', rate: 27.55 },
  { currency: 'EUR', rate: 30.00 },
];

const CurrencyChart = () => {
  return (
    <div style={{ width: '100%', height: 120 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="currency" stroke="#ffffffaa" />
          <YAxis hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="rate"
            stroke="#ff6600"
            strokeWidth={2}
            dot={{ r: 4, stroke: '#fff', strokeWidth: 2, fill: '#ff6600' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CurrencyChart;
