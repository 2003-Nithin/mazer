'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, File } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const orders = [
  {
    order: 'ORD001',
    customer: 'Liam Johnson',
    email: 'liam@example.com',
    status: 'Fulfilled',
    date: '2023-06-23',
    amount: '$250.00',
  },
  {
    order: 'ORD002',
    customer: 'Olivia Smith',
    email: 'olivia@example.com',
    status: 'Pending',
    date: '2023-06-24',
    amount: '$150.00',
  },
  {
    order: 'ORD003',
    customer: 'Noah Williams',
    email: 'noah@example.com',
    status: 'Fulfilled',
    date: '2023-06-25',
    amount: '$350.00',
  },
  {
    order: 'ORD004',
    customer: 'Emma Brown',
    email: 'emma@example.com',
    status: 'Cancelled',
    date: '2023-06-26',
    amount: '$450.00',
  },
  {
    order: 'ORD005',
    customer: 'James Jones',
    email: 'james@example.com',
    status: 'Fulfilled',
    date: '2023-06-27',
    amount: '$550.00',
  },
  {
    order: 'ORD006',
    customer: 'Sophia Davis',
    email: 'sophia@example.com',
    status: 'Fulfilled',
    date: '2023-06-28',
    amount: '$120.00',
  },
  {
    order: 'ORD007',
    customer: 'Logan Miller',
    email: 'logan@example.com',
    status: 'Pending',
    date: '2023-06-29',
    amount: '$75.00',
  },
];

export default function OrdersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = orders.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Fulfilled':
        return 'success';
      case 'Pending':
        return 'secondary';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-7 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
          </Button>
          <Button size="sm" className="h-7 gap-1">Create Order</Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
          <CardDescription>
            Manage your orders and view their details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="pb-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="fulfilled">Fulfilled</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((order) => (
                <TableRow key={order.order} className="transition-colors hover:bg-muted/50">
                  <TableCell className="font-medium">{order.order}</TableCell>
                  <TableCell>
                      <div className="font-medium">{order.customer}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {order.email}
                      </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant={getBadgeVariant(order.status) as any}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {order.date}
                  </TableCell>
                  <TableCell className="text-right">{order.amount}</TableCell>
                   <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="flex justify-end space-x-2">
        <Button
          variant="outline"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
