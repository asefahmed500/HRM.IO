import * as React from "react"
import { 
  Calendar, 
  Clock, 
  UserCheck, 
  AlertCircle,
  MoreVertical,
  Download,
  Filter,
  Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

import { cn } from "@/lib/utils"

export default function AttendancePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Attendance</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Daily check-ins and working hours tracking.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="shadow-outline-ring">
            <Download className="mr-2 size-4" /> Export Report
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
            Manual Entry
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {ATTENDANCE_STATS.map((stat) => (
           <Card key={stat.label} className="p-6">
              <div className="flex items-center gap-4">
                 <div className={cn("size-10 rounded-xl flex items-center justify-center shadow-outline-ring", stat.bg, stat.color)}>
                   <stat.icon className="size-5" />
                 </div>
                 <div>
                    <p className="text-[11px] font-heading font-semibold uppercase tracking-[1.5px] text-muted-foreground/60">{stat.label}</p>
                    <h3 className="text-2xl font-heading font-light tracking-tight">{stat.value}</h3>
                 </div>
              </div>
           </Card>
         ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Attendance Log Table */}
        <div className="xl:col-span-2 space-y-6">
           <Card className="shadow-outline-ring ring-1 ring-stone-500/5">
              <CardContent className="p-4 flex gap-4">
                 <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50" />
                    <Input placeholder="Search employee..." className="pl-10 h-10 bg-secondary/30 border-transparent rounded-xl" />
                 </div>
                 <Button variant="outline" className="h-10 rounded-xl shadow-outline-ring">
                    <Calendar className="mr-2 size-4" /> Apr 18, 2025
                 </Button>
                 <Button variant="outline" className="h-10 rounded-xl shadow-outline-ring">
                    <Filter className="mr-2 size-4" /> Filters
                 </Button>
              </CardContent>
           </Card>

           <Card className="overflow-hidden shadow-card border-none">
              <Table>
                <TableHeader className="bg-stone-50/50">
                  <TableRow className="h-14 border-b-border/40">
                    <TableHead className="w-[280px] font-heading font-semibold text-[10px] uppercase tracking-wider px-6">Employee</TableHead>
                    <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Status</TableHead>
                    <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Check In</TableHead>
                    <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Check Out</TableHead>
                    <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Hours</TableHead>
                    <TableHead className="w-[60px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ATTENDANCE_LOG.map((row, idx) => (
                    <TableRow key={idx} className="group border-b-border/30">
                      <TableCell className="px-6 py-4">
                         <div className="flex items-center gap-3">
                            <Avatar className="size-9 border-2 border-white shadow-soft-elevation">
                               <AvatarFallback className="bg-stone-100 font-bold text-[10px] text-stone-500">{row.initials}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                               <span className="font-semibold text-[14px] group-hover:text-black transition-colors">{row.name}</span>
                               <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-tight">{row.id}</span>
                            </div>
                         </div>
                      </TableCell>
                      <TableCell>
                         <Badge variant="outline" className={cn("rounded-full border-none px-2.5 py-0.5 font-bold text-[9px] uppercase", row.statusBg, row.statusColor)}>
                            {row.status}
                         </Badge>
                      </TableCell>
                      <TableCell className="text-[13px] font-medium text-stone-600 font-mono tracking-tight">{row.in}</TableCell>
                      <TableCell className="text-[13px] font-medium text-stone-600 font-mono tracking-tight">{row.out}</TableCell>
                      <TableCell className="text-[13px] font-bold text-stone-900 font-mono tracking-tight">{row.hours}</TableCell>
                      <TableCell>
                         <Button variant="ghost" size="icon" className="size-8 rounded-full"><MoreVertical className="size-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
           </Card>
        </div>

        {/* Sidebar Summary */}
        <div className="space-y-8">
           <Card className="shadow-card border-none">
              <CardHeader className="pb-4">
                 <CardTitle className="text-lg">Today&apos;s Highlights</CardTitle>
                 <CardDescription>Real-time summary of check-ins</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                 {HIGHLIGHTS.map((item, idx) => (
                   <div key={idx} className="flex items-start gap-4">
                      <div className={cn("size-8 rounded-lg mt-1 flex items-center justify-center flex-shrink-0 shadow-soft-elevation", item.bg, item.color)}>
                        <item.icon className="size-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                         <p className="text-[13.5px] font-semibold text-stone-800 leading-tight">{item.title}</p>
                         <p className="text-[11.5px] text-muted-foreground/80 font-medium mt-1">{item.sub}</p>
                      </div>
                   </div>
                 ))}
                 <div className="pt-4 border-t border-border/40">
                    <Button variant="outline" className="w-full rounded-xl shadow-outline-ring font-bold text-xs">View all alerts</Button>
                 </div>
              </CardContent>
           </Card>

           <Card className="bg-stone-950 text-white overflow-hidden relative shadow-warm-lift border-none">
              <CardHeader className="relative z-10">
                 <CardTitle className="text-white text-base font-bold">Shift Compliance</CardTitle>
                 <CardDescription className="text-stone-400">Week of April 14</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pb-8">
                 <div className="flex items-end justify-between gap-2 h-20 mb-6">
                    {[65, 80, 72, 90, 85, 40].map((v, i) => (
                      <div key={i} className="flex-1 bg-stone-800 rounded-t-sm relative overflow-hidden" style={{ height: `${v}%` }}>
                         <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" title={`${v}%`} />
                      </div>
                    ))}
                 </div>
                 <div className="flex items-center justify-between px-1">
                    <div>
                       <p className="text-2xl font-heading font-light tracking-tight">82.4%</p>
                       <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Avg Compliance</p>
                    </div>
                    <div className="text-right">
                       <p className="text-2xl font-heading font-light tracking-tight text-emerald-400">+4.1%</p>
                       <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Vs Last Week</p>
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>

      </div>
    </div>
  )
}

const ATTENDANCE_STATS = [
  { label: "Present Today", value: "232", icon: UserCheck, bg: "bg-emerald-50", color: "text-emerald-600" },
  { label: "Late Arrivals", value: "14", icon: Clock, bg: "bg-amber-50", color: "text-amber-700" },
  { label: "Absentees", value: "8", icon: AlertCircle, bg: "bg-rose-50", color: "text-rose-600" },
  { label: "Avg Hours", value: "8.4h", icon: Calendar, bg: "bg-stone-100", color: "text-stone-700" },
]

const ATTENDANCE_LOG = [
  { id: "EMP-001", name: "Mahfuz Hasan", initials: "MH", status: "On Time", in: "08:52 AM", out: "05:15 PM", hours: "8h 23m", statusBg: "bg-emerald-100", statusColor: "text-emerald-700" },
  { id: "EMP-004", name: "Tahmid Hossain", initials: "TH", status: "Late", in: "09:45 AM", out: "06:20 PM", hours: "8h 35m", statusBg: "bg-amber-100", statusColor: "text-amber-700" },
  { id: "EMP-003", name: "Nasrin Begum", initials: "NB", status: "On Time", in: "08:45 AM", out: "05:00 PM", hours: "8h 15m", statusBg: "bg-emerald-100", statusColor: "text-emerald-700" },
  { id: "EMP-005", name: "Rifat Ahmed", initials: "RA", status: "On Time", in: "08:58 AM", out: "05:10 PM", hours: "8h 12m", statusBg: "bg-emerald-100", statusColor: "text-emerald-700" },
  { id: "EMP-012", name: "Sadia Islam", initials: "SI", status: "Absent", in: "--:--", out: "--:--", hours: "0h 0m", statusBg: "bg-rose-100", statusColor: "text-rose-700" },
]

const HIGHLIGHTS = [
  { title: "Peak Check-in", sub: "Most employees arrived between 08:45 – 09:15 AM.", icon: Clock, bg: "bg-blue-50", color: "text-blue-600" },
  { title: "Department Alert", sub: "Marketing has 3 absentees today without pre-approved leave.", icon: AlertCircle, bg: "bg-rose-50", color: "text-rose-600" },
  { title: "Overtime Notice", sub: "Engineering lead team is averaging 9.5 hours this week.", icon: Clock, bg: "bg-amber-50", color: "text-amber-700" },
]
