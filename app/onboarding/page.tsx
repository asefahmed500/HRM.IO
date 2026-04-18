import * as React from "react"
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  FileText, 
  Plus, 
  MoreHorizontal,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export default function OnboardingPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Onboarding</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Track and manage the integration of new team members.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="shadow-outline-ring">
             Setup Guide
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
            <Plus className="mr-2 size-4" /> Start Onboarding
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {ONBOARDING_STATS.map((stat) => (
           <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-heading font-semibold uppercase tracking-[1.5px] text-muted-foreground/60 mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-heading font-light tracking-tight">{stat.value}</h3>
                </div>
                <div className={cn("size-12 rounded-2xl flex items-center justify-center shadow-outline-ring", stat.bg, stat.color)}>
                  <stat.icon className="size-6" />
                </div>
              </div>
           </Card>
         ))}
      </div>

      {/* Main Pipeline and Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Full Pipeline */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between px-2">
              <h3 className="text-lg font-heading font-semibold tracking-tight">Active Pipelines</h3>
              <Button variant="link" className="text-black font-bold text-sm">Configure workflow</Button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ONBOARDING_PIPELINE.map((stage) => (
                <Card key={stage.title} className="shadow-soft-elevation border-stone-200/60">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={cn("size-2 rounded-full", stage.dot)} />
                        <CardTitle className="text-base">{stage.title}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="rounded-full px-2 py-0 h-5 font-bold text-[10px]">{stage.items.length}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {stage.items.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-secondary/20 border border-transparent hover:border-stone-200 hover:bg-white hover:shadow-card transition-all cursor-pointer group">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="size-8 border-2 border-white shadow-soft-elevation">
                            <AvatarFallback className={cn("text-[10px] font-bold text-white", stage.bg)}>{item.initials}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-[13.5px] font-semibold text-foreground truncate group-hover:text-black">{item.name}</h5>
                            <p className="text-[11px] text-muted-foreground font-medium truncate">{item.role}</p>
                          </div>
                          <ChevronRight className="size-4 text-stone-300 group-hover:text-stone-600 transition-colors" />
                        </div>
                        <div className="space-y-1.5">
                           <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground/60 uppercase tracking-tighter">
                              <span>Step {item.step} of 6</span>
                              <span>{item.progress}%</span>
                           </div>
                           <Progress value={item.progress} className="h-1.5 bg-secondary/50" indicatorClassName={stage.bg} />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
           </div>
        </div>

        {/* Actionable Checklist */}
        <div className="space-y-8">
           <Card className="shadow-warm-lift border-stone-200/80">
              <CardHeader>
                 <CardTitle className="text-lg">Your Tasks</CardTitle>
                 <CardDescription>Actions assigned to you today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 {TASKS.map((task, idx) => (
                   <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-stone-50/50 border border-stone-100 hover:bg-white hover:shadow-card transition-all cursor-pointer group">
                      <div className={cn("size-6 rounded-full mt-0.5 flex items-center justify-center border-2 transition-colors", task.done ? "bg-emerald-500 border-emerald-500 text-white" : "border-stone-200 group-hover:border-stone-400")}>
                        {task.done && <CheckCircle2 className="size-3.5" />}
                      </div>
                      <div className="flex-1">
                         <p className={cn("text-[13.5px] font-semibold transition-colors", task.done ? "text-stone-400 line-through" : "text-stone-800 group-hover:text-black")}>{task.title}</p>
                         <p className="text-[11.5px] text-muted-foreground/80 font-medium mt-0.5">{task.sub}</p>
                      </div>
                   </div>
                 ))}
              </CardContent>
              <CardFooter className="bg-stone-50/30 border-t-0 pb-6 pt-2">
                 <Button variant="outline" className="w-full rounded-2xl shadow-outline-ring font-bold text-xs uppercase tracking-widest">
                    Add new task
                 </Button>
              </CardFooter>
           </Card>

           <Card className="bg-black text-white shadow-warm-lift overflow-hidden relative">
              <CardHeader className="relative z-10">
                 <CardTitle className="text-white">Help & Support</CardTitle>
                 <CardDescription className="text-white/60">Need help setting up?</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                 <p className="text-sm font-medium leading-relaxed">
                    Check our onboarding documentation or schedule a call with an HR expert.
                 </p>
                 <Button className="mt-6 w-full bg-white text-black hover:bg-white/90 rounded-2xl font-bold">
                    View Documentation
                 </Button>
              </CardContent>
              {/* Abstract decoration */}
              <div className="absolute bottom-0 right-0 -mb-4 -mr-4 size-32 bg-white/5 blur-2xl rounded-full" />
           </Card>
        </div>

      </div>
    </div>
  )
}

const ONBOARDING_STATS = [
  { label: "Active Onboardings", value: "7", icon: Users, bg: "bg-blue-50", color: "text-blue-600" },
  { label: "Completed This Month", value: "12", icon: CheckCircle2, bg: "bg-emerald-50", color: "text-emerald-600" },
  { label: "Avg. Time to Onboard", value: "4.2d", icon: Clock, bg: "bg-stone-100", color: "text-stone-700" },
]

const ONBOARDING_PIPELINE = [
  { 
    title: "Review & IT Setup", 
    dot: "bg-amber-500", 
    bg: "bg-amber-500",
    items: [
      { name: "Mahfuz Rahman", role: "Backend Developer", initials: "MR", step: 3, progress: 45 },
      { name: "Sadia Khanam", role: "Sales Executive", initials: "SK", step: 2, progress: 25 },
    ]
  },
  { 
    title: "Team Introduction", 
    dot: "bg-blue-500", 
    bg: "bg-blue-500",
    items: [
      { name: "Tahmid Hossain", role: "UI/UX Designer", initials: "TH", step: 4, progress: 65 },
      { name: "Nusrat Islam", role: "Finance Analyst", initials: "NI", step: 5, progress: 80 },
    ]
  }
]

const TASKS = [
  { title: "Approve Mahfuz's access", sub: "Slack, GitHub, Jira requests", done: false },
  { title: "Review Sadia's contract", sub: "Verify signatures and terms", done: true },
  { title: "Assign buddy to Tahmid", sub: "Pair with a senior team member", done: false },
  { title: "Schedule welcome call", sub: "30 mins intro with leadership", done: false },
]
