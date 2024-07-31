import { AreaChart, Area } from "recharts";

const Areachart = ({ data }) => {
  return (
    <AreaChart width={500} height={400} data={data}>
      <Area dataKey="data" />
    </AreaChart>
  );
};

export default Areachart;
