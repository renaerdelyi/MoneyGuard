import React from 'react';
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CurrencyChart = ({ data }) => {
  const formattedData = Object.entries(data).map(([currency, rates]) => ({
    currency,
    rate: parseFloat(rates.purchase), // sau .sale dacă vrei
  }));

  return (
    <div style={{ width: '100%', height: 150 }}>
      <ResponsiveContainer>
        <AreaChart data={formattedData}>
          <defs>
            <linearGradient id="shadowGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff6600" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#000" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="currency" stroke="#ffffffaa" />
          <YAxis hide />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="rate"
            stroke="none"
            fill="url(#shadowGradient)"
          />

          <Line
            type="monotone"
            dataKey="rate"
            stroke="#ff6600"
            strokeWidth={2}
            dot={{ r: 4, stroke: '#fff', strokeWidth: 2, fill: '#ff6600' }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CurrencyChart;
