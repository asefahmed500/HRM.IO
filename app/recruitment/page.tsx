import * as React from "react"
import { 
  Search, 
  Plus, 
  MapPin, 
  Clock, 
  Users, 
  Briefcase,
  ChevronRight,
  MoreVertical,
  ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export default function RecruitmentPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Recruitment</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Manage open positions and track candidate pipelines.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="shadow-outline-ring">
             Careers Page
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
            <Plus className="mr-2 size-4" /> Create Job Post
          </Button>
        </div>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {RECRUITMENT_STATS.map((stat) => (
           <Card key={stat.label} className="p-6 group hover:border-stone-400 transition-all duration-300">
              <div className="flex items-center gap-4">
                 <div className={cn("size-10 rounded-xl flex items-center justify-center shadow-soft-elevation", stat.bg, stat.color)}>
                    <stat.icon className="size-5" />
                 </div>
                 <div>
                    <p className="text-[10px] font-heading font-bold uppercase tracking-[1.5px] text-muted-foreground/60">{stat.label}</p>
                    <h3 className="text-2xl font-heading font-light tracking-tight">{stat.value}</h3>
                 </div>
              </div>
           </Card>
         ))}
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
         {/* Active Jobs */}
         <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between px-2">
               <h3 className="text-2xl font-heading font-light tracking-tight">Active Job Openings</h3>
               <Button variant="link" className="text-stone-400 font-bold text-xs uppercase tracking-widest decoration-stone-200 underline-offset-4 hover:text-stone-900 transition-colors">Archive</Button>
            </div>
            
            <div className="space-y-6">
               {JOBS.map((job) => (
                 <Card key={job.title} className="group hover:shadow-warm-lift hover:border-stone-300 transition-all duration-500 border-stone-200/60 overflow-hidden relative">
                    <CardHeader className="pb-4">
                       <div className="flex items-start justify-between gap-4">
                          <div>
                             <CardTitle className="text-2xl group-hover:text-black transition-colors">{job.title}</CardTitle>
                             <div className="flex items-center gap-4 mt-2">
                                <span className="flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground"><MapPin className="size-3.5" /> {job.location}</span>
                                <span className="flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground"><Briefcase className="size-3.5" /> {job.type}</span>
                                <span className="flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground"><Clock className="size-3.5" /> {job.posted}</span>
                             </div>
                          </div>
                          <Badge className={cn("rounded-full px-3 py-1 font-bold text-[10px] uppercase tracking-widest border-none", job.statusBg, job.statusColor)}>{job.status}</Badge>
                       </div>
                    </CardHeader>
                    <CardContent>
                       <div className="flex items-center justify-between p-4 bg-stone-50/50 rounded-2xl border border-stone-100 group-hover:bg-white group-hover:border-stone-200 transition-all duration-500">
                          <div className="flex -space-x-2">
                             {[1,2,3,4].map(i => (
                               <Avatar key={i} className="size-8 border-2 border-white shadow-soft-elevation">
                                  <AvatarFallback className="bg-stone-200 text-[10px] font-bold text-stone-500">C{i}</AvatarFallback>
                               </Avatar>
                             ))}
                             <div className="size-8 rounded-full border-2 border-white bg-stone-100 shadow-soft-elevation flex items-center justify-center text-[10px] font-bold text-stone-400">+{job.applicants - 4}</div>
                          </div>
                          <div className="text-right">
                             <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 mb-0.5">Total Applicants</p>
                             <p className="text-[15px] font-heading font-normal text-black">{job.applicants} candidates</p>
                          </div>
                       </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                       <Button className="w-full bg-black text-white hover:bg-black/90 rounded-2xl font-bold h-11 shadow-warm-lift">
                          View Applications <ArrowUpRight className="ml-1.5 size-4" />
                       </Button>
                    </CardFooter>
                    {/* Background accent */}
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 size-24 bg-stone-100/50 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 </Card>
               ))}
            </div>
         </div>

         {/* Candidate Pipeline Summary */}
         <div className="space-y-8">
            <Card className="shadow-card border-none bg-stone-50/50">
               <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Pipeline Overview</CardTitle>
                  <CardDescription>Candidates across all stages</CardDescription>
               </CardHeader>
               <CardContent className="space-y-6">
                  {PIPELINE.map((stage) => (
                    <div key={stage.label} className="space-y-2">
                       <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[1px]">
                          <span className="text-stone-500">{stage.label}</span>
                          <span className="text-stone-900">{stage.count} <small className="text-stone-400">candidates</small></span>
                       </div>
                       <div className="h-1.5 bg-stone-200/40 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full transition-all duration-1000", stage.color)} style={{ width: `${(stage.count / 42) * 100}%` }} />
                       </div>
                    </div>
                  ))}
               </CardContent>
               <CardFooter className="pt-2">
                  <Button variant="outline" className="w-full rounded-2xl shadow-outline-ring font-bold text-xs uppercase tracking-widest">Global Analytics</Button>
               </CardFooter>
            </Card>

            <Card className="bg-black text-white shadow-warm-lift border-none overflow-hidden relative">
               <CardHeader className="relative z-10 pb-4">
                  <CardTitle className="text-white text-base">Hiring Tip</CardTitle>
               </CardHeader>
               <CardContent className="relative z-10 space-y-4">
                  <p className="text-[13.5px] font-medium leading-relaxed text-stone-400">
                     Internal referrals have a <span className="text-white font-bold">45% higher</span> retention rate compared to external hires. Encouraging team referrals can reduce turnover.
                  </p>
                  <Button className="w-full bg-white text-black hover:bg-stone-200 rounded-2xl font-bold h-11">
                     Setup Referral Bonus
                  </Button>
               </CardContent>
               <div className="absolute -bottom-8 -left-8 size-40 bg-stone-800/30 blur-3xl rounded-full" />
            </Card>
         </div>

      </div>
    </div>
  )
}

const RECRUITMENT_STATS = [
  { label: "Active Jobs", value: "14", icon: Briefcase, bg: "bg-blue-50", color: "text-blue-600" },
  { label: "New Apps (24h)", value: "28", icon: Users, bg: "bg-emerald-50", color: "text-emerald-600" },
  { label: "Offer Rate", value: "3.2%", icon: ArrowUpRight, bg: "bg-stone-100", color: "text-stone-700" },
  { label: "Interviews", value: "12", icon: Clock, bg: "bg-indigo-50", color: "text-indigo-600" },
]

const JOBS = [
  { title: "Senior Product Designer", location: "Remote / Dhaka", type: "Full-time", posted: "2d ago", applicants: 18, status: "Active", statusBg: "bg-emerald-50", statusColor: "text-emerald-600" },
  { title: "Engineering Manager", location: "On-site (Dhaka)", type: "Full-time", posted: "5d ago", applicants: 7, status: "Active", statusBg: "bg-emerald-50", statusColor: "text-emerald-600" },
  { title: "DevOps Lead", location: "Hybrid", type: "Contract", posted: "1w ago", applicants: 12, status: "Urgent", statusBg: "bg-rose-50", statusColor: "text-rose-600" },
]

const PIPELINE = [
  { label: "Screening", count: 18, color: "bg-stone-400" },
  { label: "Technical Interview", count: 12, color: "bg-blue-500" },
  { label: "Culture Fit", count: 7, color: "bg-indigo-500" },
  { label: "Offer Pending", count: 5, color: "bg-emerald-500" },
]
