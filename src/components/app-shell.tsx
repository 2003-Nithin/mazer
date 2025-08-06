
'use client';

import {
  Bell,
  LayoutGrid,
  Menu,
  Package2,
  Search,
  Settings,
  Grid,
  FileText,
  Table,
  ChevronsRight,
  LogOut,
  Moon,
  Sun,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
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
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/theme-toggle';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
  ];

  const componentItems = [
    { href: '/accordion', label: 'Accordion' },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Package2 className="h-8 w-8 text-primary" />
            </Link>
            <div className="flex items-center gap-2">
                <Sun className="h-5 w-5" />
                <Switch 
                  checked={theme === 'dark'}
                  onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
                <Moon className="h-5 w-5" />
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href} className="w-full">
                    <SidebarMenuButton
                      isActive={pathname === item.href}
                      className="bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Components</SidebarGroupLabel>
             <SidebarMenu>
                 <SidebarMenuItem>
                    <SidebarMenuButton>
                        <Grid className="h-5 w-5" />
                        Components
                        <ChevronsRight className="h-4 w-4 ml-auto" />
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                        {componentItems.map((item) => (
                            <SidebarMenuSubItem key={item.href}>
                                <Link href={item.href} className="w-full">
                                    <SidebarMenuSubButton isActive={pathname === item.href}>
                                        {item.label}
                                    </SidebarMenuSubButton>
                                </Link>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                 </SidebarMenuItem>
             </SidebarMenu>
          </SidebarGroup>
           <SidebarGroup>
            <SidebarGroupLabel>Forms & Tables</SidebarGroupLabel>
             <SidebarMenu>
                 <SidebarMenuItem>
                    <SidebarMenuButton>
                        <FileText className="h-5 w-5" />
                        Form Elements
                        <ChevronsRight className="h-4 w-4 ml-auto" />
                    </SidebarMenuButton>
                 </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton>
                        <Table className="h-5 w-5" />
                        Table
                        <ChevronsRight className="h-4 w-4 ml-auto" />
                    </SidebarMenuButton>
                 </SidebarMenuItem>
             </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 p-2 h-auto"
              >
                <Avatar className="h-10 w-10">
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
      <div className="flex flex-col flex-1">
        <header className="flex h-14 items-center gap-4 bg-background px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
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
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-yellow-300">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
