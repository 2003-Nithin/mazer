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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const customers = [
  {
    id: 'CUST001',
    name: 'Liam Johnson',
    email: 'liam@example.com',
    totalSpent: '$1,250.00',
    joinedDate: '2023-01-15',
    avatar: 'https://placehold.co/40x40.png',
    avatarFallback: 'LJ',
    aiHint: 'person avatar'
  },
  {
    id: 'CUST002',
    name: 'Olivia Smith',
    email: 'olivia@example.com',
    totalSpent: '$850.50',
    joinedDate: '2023-02-20',
    avatar: 'https://placehold.co/40x40.png',
    avatarFallback: 'OS',
    aiHint: 'person avatar'
  },
  {
    id: 'CUST003',
    name: 'Noah Williams',
    email: 'noah@example.com',
    totalSpent: '$3,500.00',
    joinedDate: '2023-03-10',
    avatar: 'https://placehold.co/40x40.png',
    avatarFallback: 'NW',
    aiHint: 'person avatar'
  },
  {
    id: 'CUST004',
    name: 'Emma Brown',
    email: 'emma@example.com',
    totalSpent: '$500.75',
    joinedDate: '2023-04-05',
    avatar: 'https://placehold.co/40x40.png',
    avatarFallback: 'EB',
    aiHint: 'person avatar'
  },
  {
    id: 'CUST005',
    name: 'James Jones',
    email: 'james@example.com',
    totalSpent: '$2,100.20',
    joinedDate: '2023-05-21',
    avatar: 'https://placehold.co/40x40.png',
    avatarFallback: 'JJ',
    aiHint: 'person avatar'
  },
  {
    id: 'CUST006',
    name: 'Sophia Davis',
    email: 'sophia@example.com',
    totalSpent: '$980.00',
    joinedDate: '2023-06-11',
    avatar: 'https://placehold.co/40x40.png',
    avatarFallback: 'SD',
    aiHint: 'person avatar'
  },
];

export default function CustomersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = customers.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Customers</h1>
        <div className="flex items-center gap-2">
            <Input placeholder="Search customers..." className="w-64" />
            <Button>Add Customer</Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
          <CardDescription>
            A list of all customers in your system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden sm:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">Total Spent</TableHead>
                <TableHead className="hidden md:table-cell">Joined Date</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src={customer.avatar} alt={customer.name} data-ai-hint={customer.aiHint} />
                        <AvatarFallback>{customer.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{customer.name}</div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{customer.email}</TableCell>
                  <TableCell className="hidden md:table-cell">{customer.totalSpent}</TableCell>
                  <TableCell className="hidden md:table-cell">{customer.joinedDate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
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
