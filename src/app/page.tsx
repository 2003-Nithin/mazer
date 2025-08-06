'use client';

import {
  Bell,
  DollarSign,
  Home,
  LineChart,
  LogOut,
  Package,
  Package2,
  Search,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ThemeToggle } from '@/components/theme-toggle';

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
];

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Mazer Customizer</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <Home className="h-4 w-4" />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <ShoppingCart className="h-4 w-4" />
                Orders
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Package className="h-4 w-4" />
                Products
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Users className="h-4 w-4" />
                Customers
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LineChart className="h-4 w-4" />
                Analytics
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 p-2 h-auto"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="profile picture" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-semibold text-sm">John Doe</p>
                  <p className="text-xs text-muted-foreground">
                    john.doe@email.com
                  </p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mb-2 w-52" side="top" align="start">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
          <SidebarTrigger className="md:hidden" />
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <ThemeToggle />
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
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
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                An overview of the most recent orders.
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
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
