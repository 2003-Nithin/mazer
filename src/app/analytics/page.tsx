import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartData = [
  { date: '2024-01-01', visitors: 200, pageviews: 400 },
  { date: '2024-01-02', visitors: 250, pageviews: 450 },
  { date: '2024-01-03', visitors: 300, pageviews: 550 },
  { date: '2024-01-04', visitors: 280, pageviews: 520 },
  { date: '2024-01-05', visitors: 350, pageviews: 650 },
  { date: '2024-01-06', visitors: 400, pageviews: 700 },
  { date: '2024-01-07', visitors: 420, pageviews: 780 },
];

const chartConfig = {
  visitors: {
    label: 'Unique Visitors',
    color: 'hsl(var(--chart-1))',
  },
  pageviews: {
    label: 'Page Views',
    color: 'hsl(var(--chart-2))',
  },
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
      <Card>
        <CardHeader>
          <CardTitle>Website Traffic</CardTitle>
          <CardDescription>A summary of your website traffic over the last 7 days.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="visitors"
                type="monotone"
                stroke="var(--color-visitors)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="pageviews"
                type="monotone"
                stroke="var(--color-pageviews)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
