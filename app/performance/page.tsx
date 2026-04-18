import * as React from "react"
import { 
  Award, 
  Target, 
  TrendingUp, 
  Star, 
  ChevronRight,
  Plus,
  MoreVertical
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export default function PerformancePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Performance</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Monitor team KPIs and manage performance review cycles.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="shadow-outline-ring">
             Review Policies
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
            <Plus className="mr-2 size-4" /> New Review Cycle
          </Button>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {KPI_STATS.map((kpi) => (
           <Card key={kpi.label} className="p-8 group hover:border-stone-400 transition-all duration-300 relative overflow-hidden">
              <p className="text-[11px] font-heading font-bold uppercase tracking-[2px] text-muted-foreground/50 mb-6">{kpi.label}</p>
              <div className="flex items-baseline gap-3 mb-4">
                 <h3 className="text-4xl font-heading font-light tracking-tight">{kpi.value}</h3>
                 <span className="text-[11px] font-bold text-emerald-600 px-1.5 py-0.5 rounded-md bg-emerald-50">{kpi.delta}</span>
              </div>
              <Progress value={kpi.progress} className="h-1.5 bg-secondary/50" indicatorClassName={kpi.color} />
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                 <kpi.icon className="size-16" />
              </div>
           </Card>
         ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         
         {/* Top Performers */}
         <div className="xl:col-span-2 space-y-6">
            <div className="flex items-center justify-between px-2">
               <h3 className="text-2xl font-heading font-light tracking-tight">Top Performers — Q1 2025</h3>
               <Button variant="link" className="text-stone-400 font-bold text-xs uppercase tracking-widest decoration-stone-200 underline-offset-4 hover:text-stone-900 transition-colors">View All Leaderboard</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {PERFORMERS.map((perf) => (
                 <Card key={perf.name} className="group hover:shadow-warm-lift hover:border-stone-300 transition-all duration-500 border-stone-200/60">
                    <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
                       <Avatar className="size-12 border-4 border-white shadow-soft-elevation">
                          <AvatarFallback className="bg-stone-100 font-bold text-sm text-stone-500">{perf.initials}</AvatarFallback>
                       </Avatar>
                       <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg group-hover:text-black transition-colors truncate">{perf.name}</CardTitle>
                          <CardDescription className="text-[12px] truncate">{perf.role}</CardDescription>
                       </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex items-center justify-between">
                          <div className="flex gap-1">
                             {[1,2,3,4,5].map(i => (
                               <Star key={i} className={cn("size-3.5", i <= perf.rating ? "text-stone-900 fill-stone-900" : "text-stone-200 fill-stone-100")} />
                             ))}
                          </div>
                          <span className="text-[13px] font-bold text-black">{perf.rating}.0 / 5.0</span>
                       </div>
                       <div className="p-3 bg-stone-50/50 rounded-xl border border-stone-100 group-hover:bg-white transition-all">
                          <p className="text-[12px] font-medium text-stone-600 line-clamp-2 italic">“{perf.comment}”</p>
                       </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                       <Button variant="outline" className="w-full rounded-2xl shadow-outline-ring font-bold text-[10px] uppercase tracking-wider h-10 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                          View Performance Details
                       </Button>
                    </CardFooter>
                 </Card>
               ))}
            </div>
         </div>

         {/* Review Cycles */}
         <div className="space-y-8">
            <Card className="shadow-card border-none bg-stone-950 text-white overflow-hidden relative">
               <CardHeader className="relative z-10 pb-4">
                  <CardTitle className="text-white text-lg">Active Review Cycles</CardTitle>
                  <CardDescription className="text-stone-400">Cycles requiring your attention</CardDescription>
               </CardHeader>
               <CardContent className="relative z-10 space-y-6">
                  {CYCLES.map((cycle) => (
                    <div key={cycle.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 group cursor-pointer hover:bg-white/10 transition-all">
                       <div className="flex items-center justify-between mb-4">
                          <h5 className="text-[14px] font-bold text-white">{cycle.label}</h5>
                          <Badge className="bg-white/10 text-white border-none rounded-full px-2 h-4 text-[9px] font-bold uppercase">{cycle.status}</Badge>
                       </div>
                       <div className="space-y-2">
                          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-stone-500">
                             <span>Progress</span>
                             <span className="text-stone-300">{cycle.progress}%</span>
                          </div>
                          <Progress value={cycle.progress} className="h-1 bg-white/10" indicatorClassName="bg-white" />
                       </div>
                    </div>
                  ))}
               </CardContent>
               <CardFooter className="relative z-10 pt-2 pb-8">
                  <Button className="w-full bg-white text-black hover:bg-stone-200 rounded-2xl font-bold h-12 shadow-2xl">
                     Manage All Cycles
                  </Button>
               </CardFooter>
               {/* Abstract pattern */}
               <div className="absolute top-0 right-0 -mr-12 -mt-12 size-48 bg-white/5 blur-3xl rounded-full" />
            </Card>

            <Card className="shadow-outline-ring border-none">
               <CardHeader className="pb-4">
                  <CardTitle className="text-lg">KPI Improvement Tips</CardTitle>
               </CardHeader>
               <CardContent className="space-y-5">
                  <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex gap-4">
                     <div className="size-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                        <Target className="size-4" />
                     </div>
                     <p className="text-[12.5px] font-medium text-blue-900 leading-relaxed">
                        Teams with clearly defined bi-weekly goals show <span className="font-bold">22% better</span> alignment.
                     </p>
                  </div>
                  <Button variant="outline" className="w-full rounded-2xl shadow-outline-ring font-bold text-xs uppercase tracking-widest">Explore Benchmarks</Button>
               </CardContent>
            </Card>
         </div>

      </div>
    </div>
  )
}

const KPI_STATS = [
  { label: "Org. Productivity", value: "88.4%", delta: "+3.2%", progress: 88, icon: TrendingUp, color: "bg-stone-900" },
  { label: "Goal Completion", value: "92.1%", delta: "+1.5%", progress: 92, icon: Target, color: "bg-blue-600" },
  { label: "Review Compliance", value: "76.5%", delta: "+4.8%", progress: 76, icon: Award, color: "bg-indigo-600" },
]

const PERFORMERS = [
  { name: "Mahfuz Hasan", role: "Senior Lead Engineer", initials: "MH", rating: 5, comment: "Exceeded all engineering targets for Q1 with exceptional leadership.", bg: "bg-stone-900" },
  { name: "Sumaiya Akter", role: "UX Strategy Lead", initials: "SA", rating: 5, comment: "Revolutionized our product design workflow and user satisfaction scores.", bg: "bg-blue-600" },
]

const CYCLES = [
  { label: "Q1 Performance Review", status: "Active", progress: 68 },
  { label: "Mid-Year Salary Review", status: "Upcoming", progress: 0 },
]
