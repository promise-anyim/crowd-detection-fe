import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const barColors = ["#398cff", "#73ADFF", "#3485F6", "#4d97ff", "#65a5ff"];

export default function ChartPanel({ title, data = [] }) {
  return (
    <div className="panel chart-panel">
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, .08)" />
          <XAxis dataKey="density_level" stroke="#4c72a8" />
          <YAxis stroke="#4c72a8" />
          <Tooltip />
          <Bar dataKey="count" radius={[10, 10, 0, 0]}>
            {data.map((_, index) => <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
