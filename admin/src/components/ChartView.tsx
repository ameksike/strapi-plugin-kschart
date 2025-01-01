import { Box, Typography } from "@strapi/design-system";
import { Chart } from "../models/Chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dataContent = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

interface ChartViewProps {
    data: Chart;
    onEdit?: (value: Chart) => void;
    onDel?: (value: Chart) => void;
}

export function ChartView({ data }: ChartViewProps) {

    return (
        <Box width="100%" background="neutral100" hasRadius>
            <Typography variant="beta">{data.label}</Typography>
            <LineChart
                width={500}
                height={300}
                data={dataContent}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                {data.xaxis.map(point => (<XAxis dataKey={point.key} key={point.key} />))}
                <YAxis />
                <Tooltip />
                <Legend />
                {data.yaxis.map(line => (<Line type="monotone" key={line.key} dataKey={line.key} stroke={line.stroke} activeDot={{ r: 8 }} />))}
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </Box>
    )
}