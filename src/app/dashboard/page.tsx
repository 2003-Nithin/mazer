
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer
} from '@/components/ui/chart';
import { Line, LineChart } from 'recharts';

const profileVisits = [
  {
    region: 'Europe',
    visits: 862,
    color: 'hsl(var(--chart-1))',
    data: [
      { x: 0, y: 5 },
      { x: 1, y: 10 },
      { x: 2, y: 8 },
      { x: 3, y: 15 },
      { x: 4, y: 12 },
      { x: 5, y: 18 },
      { x: 6, y: 20 },
    ],
  },
  {
    region: 'America',
    visits: 375,
    color: 'hsl(var(--chart-2))',
    data: [
      { x: 0, y: 8 },
      { x: 1, y: 12 },
      { x: 2, y: 10 },
      { x: 3, y: 18 },
      { x: 4, y: 15 },
      { x: 5, y: 22 },
      { x: 6, y: 25 },
    ],
  },
  {
    region: 'India',
    visits: 625,
    color: 'hsl(var(--chart-4))',
    data: [
      { x: 0, y: 12 },
      { x: 1, y: 8 },
      { x: 2, y: 15 },
      { x: 3, y: 10 },
      { x: 4, y: 20 },
      { x: 5, y: 18 },
      { x: 6, y: 28 },
    ],
  },
  {
    region: 'Indonesia',
    visits: 1025,
    color: 'hsl(var(--chart-5))',
    data: [
      { x: 0, y: 15 },
      { x: 1, y: 10 },
      { x: 2, y: 18 },
      { x: 3, y: 12 },
      { x: 4, y: 25 },
      { x: 5, y: 20 },
      { x: 6, y: 30 },
    ],
  },
];

const latestComments = [
  {
    name: 'Si Cantik',
    comment: 'Congratulations on your graduation!',
    avatar: 'https://placehold.co/40x40.png',
    fallback: 'SC',
    aiHint: 'woman smiling',
  },
  {
    name: 'Si Ganteng',
    comment: 'Wow amazing design! Can you make another tutorial for this design?',
    avatar: 'https://placehold.co/40x40.png',
    fallback: 'SG',
    aiHint: 'man smiling',
  },
  {
    name: 'Singh Eknoor',
    comment: 'What a stunning design! You are so talented and creative!',
    avatar: 'https://placehold.co/40x40.png',
    fallback: 'SE',
    aiHint: 'creative person',
  },
  {
    name: 'Rani Jhadav',
    comment: "I love your design! It's so beautiful and unique! How did you learn to do this?",
    avatar: 'https://placehold.co/40x40.png',
    fallback: 'RJ',
    aiHint: 'woman portrait',
  },
];

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-xl">Profile Visit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {profileVisits.map((visit) => (
                <div key={visit.region} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: visit.color }}
                    />
                    <span className="font-medium">{visit.region}</span>
                  </div>
                  <div className="w-24 h-10">
                    <ChartContainer config={{}} className="w-full h-full">
                        <LineChart data={visit.data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                            <Line
                            type="monotone"
                            dataKey="y"
                            stroke={visit.color}
                            strokeWidth={2}
                            dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                  </div>
                   <span className="font-semibold">{visit.visits}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Latest Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
               <div className="grid grid-cols-[1fr_2fr] gap-4 text-sm font-semibold text-muted-foreground">
                <div>Name</div>
                <div>Comment</div>
              </div>
              {latestComments.map((comment, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_2fr] items-center gap-4"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={comment.avatar} data-ai-hint={comment.aiHint} />
                      <AvatarFallback>{comment.fallback}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{comment.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{comment.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
       <footer className="text-center text-sm text-muted-foreground mt-auto pt-6">
          2024 &copy; Mazer by <a href="#" className="font-semibold">Saugi</a>
        </footer>
    </>
  );
}
