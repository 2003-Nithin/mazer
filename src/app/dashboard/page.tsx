'use client';

import {
  DollarSign,
  LineChart,
  ShoppingCart,
  Users,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const MOCK_ORDERS = [
  {
    order: 'ORD001',
    customer: 'Liam Johnson',
    email: 'liam@example.com',
    type: 'Sale',
    status: 'Fulfilled',
    date: '2023-06-23',
    amount: '$250.00',
  },
  {
    order: 'ORD002',
    customer: 'Olivia Smith',
    email: 'olivia@example.com',
    type: 'Refund',
    status: 'Declined',
    date: '2023-06-24',
    amount: '$150.00',
  },
  {
    order: 'ORD003',
    customer: 'Noah Williams',
    email: 'noah@example.com',
    type: 'Subscription',
    status: 'Fulfilled',
    date: '2023-06-25',
    amount: '$350.00',
  },
  {
    order: 'ORD004',
    customer: 'Emma Brown',
    email: 'emma@example.com',
    type: 'Sale',
    status: 'Fulfilled',
    date: '2023-06-26',
    amount: '$450.00',
  },
  {
    order: 'ORD005',
    customer: 'James Jones',
    email: 'james@example.com',
    type: 'Sale',
    status: 'Fulfilled',
    date: '2023-06-27',
    amount: '$550.00',
  },
  {
    order: 'ORD006',
    customer: 'Sophia Davis',
    email: 'sophia@example.com',
    type: 'Sale',
    status: 'Fulfilled',
    date: '2023-06-28',
    amount: '$120.00',
  },
  {
    order: 'ORD007',
    customer: 'Logan Miller',
    email: 'logan@example.com',
    type: 'Subscription',
    status: 'Fulfilled',
    date: '2023-06-29',
    amount: '$75.00',
  },
  {
    order: 'ORD008',
    customer: 'Isabella Wilson',
    email: 'isabella@example.com',
    type: 'Refund',
    status: 'Declined',
    date: '2023-06-30',
    amount: '$200.00',
  },
  {
    order: 'ORD009',
    customer: 'Mason Moore',
    email: 'mason@example.com',
    type: 'Sale',
    status: 'Fulfilled',
    date: '2023-07-01',
    amount: '$300.00',
  },
  {
    order: 'ORD010',
    customer: 'Ava Taylor',
    email: 'ava@example.com',
    type: 'Sale',
    status: 'Fulfilled',
    date: '2023-07-02',
    amount: '$420.00',
  },
];

const chartData = [
  { month: 'January', revenue: 1860 },
  { month: 'February', revenue: 3050 },
  { month: 'March', revenue: 2370 },
  { month: 'April', revenue: 730 },
  { month: 'May', revenue: 2090 },
  { month: 'June', revenue: 2140 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-1))',
  },
};

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Subscriptions
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              You have {MOCK_ORDERS.length} orders in total.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden sm:table-cell">Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_ORDERS.map((order) => (
                  <TableRow key={order.order}>
                    <TableCell>
                      <div className="font-medium">{order.customer}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {order.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{order.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === 'Fulfilled'
                            ? 'success'
                            : 'destructive'
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{order.date}</TableCell>
                    <TableCell className="text-right">
                      {order.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>
              A chart showing revenue over the last 6 months.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
