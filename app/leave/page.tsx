import * as React from "react"
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  XCircle,
  MoreVertical,
  Plus,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export default function LeavePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Leave Management</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Track time-off requests and employee availability.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="shadow-outline-ring">
            Leave Calendar
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
            <Plus className="mr-2 size-4" /> New Request
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {LEAVE_STATS.map((stat) => (
           <Card key={stat.label} className="p-6 text-center group hover:border-stone-400 transition-all duration-300">
              <p className="text-[11px] font-heading font-semibold uppercase tracking-[2px] text-muted-foreground/60 mb-2">{stat.label}</p>
              <h3 className="text-4xl font-heading font-light tracking-tight mb-2">{stat.value}</h3>
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-tighter group-hover:text-stone-900 transition-colors">{stat.sub}</p>
           </Card>
         ))}
      </div>

      {/* Main Content */}
      <div className="space-y-6">
         <Tabs defaultValue="pending" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
               <TabsList className="bg-stone-100/50 p-1 rounded-full h-11 border border-stone-200/40">
                  <TabsTrigger value="pending" className="rounded-full px-6 text-[13px] font-bold data-[state=active]:bg-white data-[state=active]:shadow-soft-elevation data-[state=active]:text-black">Pending <Badge variant="secondary" className="ml-2 rounded-full h-4 px-1.5 text-[9px] bg-stone-200">4</Badge></TabsTrigger>
                  <TabsTrigger value="approved" className="rounded-full px-6 text-[13px] font-bold data-[state=active]:bg-white data-[state=active]:shadow-soft-elevation data-[state=active]:text-black">Approved</TabsTrigger>
                  <TabsTrigger value="history" className="rounded-full px-6 text-[13px] font-bold data-[state=active]:bg-white data-[state=active]:shadow-soft-elevation data-[state=active]:text-black">History</TabsTrigger>
               </TabsList>
               
               <div className="flex items-center gap-3">
                  <div className="relative w-64">
                     <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50" />
                     <input placeholder="Search requests..." className="w-full pl-10 pr-4 h-11 bg-white border border-stone-200 rounded-full text-sm outline-none focus:ring-1 focus:ring-stone-400 transition-all shadow-inset-edge" />
                  </div>
                  <Button variant="outline" size="icon" className="size-11 rounded-full shadow-outline-ring"><Filter className="size-4" /></Button>
               </div>
            </div>

            <TabsContent value="pending" className="mt-0">
               <Card className="overflow-hidden shadow-card border-none">
                  <Table>
                     <TableHeader className="bg-stone-50/50">
                        <TableRow className="h-14 border-b-border/40">
                           <TableHead className="w-[300px] font-heading font-semibold text-[10px] uppercase tracking-wider px-6">Employee</TableHead>
                           <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Leave Type</TableHead>
                           <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Dates</TableHead>
                           <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Duration</TableHead>
                           <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Requested On</TableHead>
                           <TableHead className="w-[180px] px-6 text-right font-heading font-semibold text-[10px] uppercase tracking-wider">Actions</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {PENDING_LEAVES.map((row, idx) => (
                           <TableRow key={idx} className="group border-b-border/30">
                              <TableCell className="px-6 py-4">
                                 <div className="flex items-center gap-3">
                                    <Avatar className="size-9 border-2 border-white shadow-soft-elevation">
                                       <AvatarFallback className={cn("bg-stone-100 font-bold text-[10px] text-stone-500")}>{row.initials}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                       <span className="font-semibold text-[14px] group-hover:text-black transition-colors">{row.name}</span>
                                       <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-tight">{row.id}</span>
                                    </div>
                                 </div>
                              </TableCell>
                              <TableCell>
                                 <Badge variant="outline" className={cn("rounded-full border-none px-2.5 py-0.5 font-bold text-[10px]", row.typeBg, row.typeColor)}>
                                    {row.type}
                                 </Badge>
                              </TableCell>
                              <TableCell className="text-[13px] font-medium text-stone-600">{row.dates}</TableCell>
                              <TableCell className="text-[13px] font-bold text-stone-900">{row.duration}</TableCell>
                              <TableCell className="text-[13px] font-medium text-stone-400">{row.requestedOn}</TableCell>
                              <TableCell className="px-6 text-right">
                                 <div className="flex items-center justify-end gap-2">
                                    <Button size="sm" variant="ghost" className="rounded-full text-emerald-600 hover:bg-emerald-50 font-bold text-[11px] uppercase tracking-wider h-8 px-3"><CheckCircle2 className="mr-1.5 size-3.5" /> Approve</Button>
                                    <Button size="sm" variant="ghost" className="rounded-full text-rose-600 hover:bg-rose-50 font-bold text-[11px] uppercase tracking-wider h-8 px-3"><XCircle className="mr-1.5 size-3.5" /> Deny</Button>
                                 </div>
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </Card>
            </TabsContent>
         </Tabs>
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <Card className="shadow-outline-ring border-none">
            <CardHeader className="pb-4">
               <CardTitle className="text-lg">Upcoming Absence</CardTitle>
               <CardDescription>Next 7 days</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               {UPCOMING_ABSENCE.map((abs, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-secondary/30 transition-all group cursor-pointer">
                     <div className={cn("size-10 rounded-xl flex items-center justify-center shadow-soft-elevation", abs.bg, abs.color)}>
                        <Calendar className="size-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                        <p className="text-[13.5px] font-semibold text-foreground group-hover:text-black">{abs.name}</p>
                        <p className="text-[11.5px] text-muted-foreground/80 font-medium">{abs.reason} · {abs.dates}</p>
                     </div>
                     <Badge variant="outline" className="rounded-full h-5 px-2 text-[9px] font-bold uppercase tracking-wider border-stone-200 text-stone-400 group-hover:text-stone-600 group-hover:border-stone-400 transition-colors">{abs.days}</Badge>
                  </div>
               ))}
               <div className="pt-2">
                  <Button variant="link" className="w-full text-stone-400 font-bold text-xs uppercase tracking-widest decoration-stone-200 underline-offset-4 hover:text-stone-900 transition-colors">View leave calendar →</Button>
               </div>
            </CardContent>
         </Card>

         <Card className="bg-stone-50 border border-stone-100 shadow-inset-edge relative overflow-hidden">
            <CardHeader className="relative z-10">
               <CardTitle className="text-lg">Leave Balances</CardTitle>
               <CardDescription>Company averages for Q1</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
               {LEAVE_BALANCES.map((bal, idx) => (
                  <div key={idx} className="space-y-1.5">
                     <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[1px]">
                        <span className="text-stone-500">{bal.label}</span>
                        <span className="text-stone-900">{bal.used} / {bal.total} <small className="text-stone-400">days</small></span>
                     </div>
                     <div className="h-2 bg-stone-200/50 rounded-full overflow-hidden">
                        <div className={cn("h-full rounded-full transition-all duration-1000", bal.color)} style={{ width: `${(bal.used / bal.total) * 100}%` }} />
                     </div>
                  </div>
               ))}
            </CardContent>
            {/* Decoration */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 size-40 bg-stone-200/20 blur-3xl rounded-full" />
         </Card>
      </div>
    </div>
  )
}

const LEAVE_STATS = [
  { label: "Today Away", value: "8", sub: "3.2% of team" },
  { label: "Requests Pending", value: "4", sub: "Action required" },
  { label: "Annual Leave", value: "14.2", sub: "Avg. days remaining" },
]

const PENDING_LEAVES = [
  { id: "EMP-001", name: "Mahfuz Hasan", initials: "MH", type: "Annual Leave", dates: "Apr 22 – Apr 25", duration: "4 Days", requestedOn: "2 hours ago", typeBg: "bg-blue-50", typeColor: "text-blue-700" },
  { id: "EMP-004", name: "Tahmid Hossain", initials: "TH", type: "Sick Leave", dates: "Apr 18 – Apr 19", duration: "2 Days", requestedOn: "5 hours ago", typeBg: "bg-rose-50", typeColor: "text-rose-700" },
  { id: "EMP-015", name: "Sadia Islam", initials: "SI", type: "Personal", dates: "May 02 – May 02", duration: "1 Day", requestedOn: "Yesterday", typeBg: "bg-amber-50", typeColor: "text-amber-700" },
  { id: "EMP-009", name: "Rifat Ahmed", initials: "RA", type: "Maternity", dates: "May 10 – Aug 10", duration: "90 Days", requestedOn: "2 days ago", typeBg: "bg-indigo-50", typeColor: "text-indigo-700" },
]

const UPCOMING_ABSENCE = [
  { name: "Rezaul Karim", reason: "Annual Leave", dates: "Apr 18 – Apr 22", bg: "bg-blue-50", color: "text-blue-600", days: "5d" },
  { name: "Nasrin Begum", reason: "Casual Leave", dates: "Apr 20 – Apr 20", bg: "bg-emerald-50", color: "text-emerald-600", days: "1d" },
  { name: "Kamrul Islam", reason: "Medical", dates: "Apr 21 – Apr 24", bg: "bg-rose-50", color: "text-rose-600", days: "4d" },
]

const LEAVE_BALANCES = [
  { label: "Annual Leave", used: 8.5, total: 20, color: "bg-blue-500" },
  { label: "Casual Leave", used: 4.2, total: 10, color: "bg-emerald-500" },
  { label: "Sick Leave", used: 2.0, total: 12, color: "bg-rose-500" },
]
