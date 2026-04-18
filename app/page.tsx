import * as React from "react"
import { 
  Users, 
  CalendarCheck, 
  CreditCard, 
  Star,
  Plus,
  Calendar,
  AlertCircle,
  LayoutGrid,
  Zap,
  MoreHorizontal
} from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">
            Good morning, Asef <span className="inline-block animate-bounce origin-bottom">👋</span>
          </h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">
            Here&apos;s what&apos;s happening in your organization today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="shadow-outline-ring border-stone-200">
            <Calendar className="mr-2.5 size-4 text-muted-foreground" />
            Apr 2025
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
            <Plus className="mr-2.5 size-4" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Alert Bar */}
      <div className="group relative overflow-hidden rounded-[24px] bg-stone-50 border border-stone-100 p-5 shadow-inset-edge">
        <div className="flex items-center gap-4 relative z-10">
          <div className="size-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shadow-outline-ring">
            <AlertCircle className="size-5" />
          </div>
          <div className="flex-1">
            <p className="text-[14.5px] font-medium text-stone-700">
              <span className="font-bold text-stone-900">3 payroll approvals</span> pending for April 2025 — deadline is the 25th.
            </p>
          </div>
          <Button variant="link" className="text-stone-900 font-bold underline-offset-4 decoration-stone-300">
            Review now →
          </Button>
        </div>
        {/* Animated background element */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 size-48 bg-stone-200/20 blur-3xl rounded-full" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Employees"
          value="248"
          delta="12 joined this month"
          deltaType="up"
          icon={Users}
          iconClassName="bg-blue-50 text-blue-600 shadow-outline-ring border border-blue-100"
        />
        <StatCard
          label="Attendance Rate"
          value="94.2"
          subValue="%"
          delta="2.1% vs last week"
          deltaType="up"
          icon={CalendarCheck}
          iconClassName="bg-emerald-50 text-emerald-600 shadow-outline-ring border border-emerald-100"
        />
        <StatCard
          label="Payroll — Apr"
          value="18.4"
          subValue="M"
          delta="৳0.3M from last month"
          deltaType="down"
          icon={CreditCard}
          iconClassName="bg-stone-100 text-stone-700 shadow-outline-ring border border-stone-200"
        />
        <StatCard
          label="Open Positions"
          value="14"
          delta="5 new this week"
          deltaType="up"
          icon={Star}
          iconClassName="bg-indigo-50 text-indigo-600 shadow-outline-ring border border-indigo-100"
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Onboarding Pipeline */}
        <Card className="xl:col-span-2">
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-7 border-b border-border/40">
            <div className="space-y-1">
              <CardTitle>Onboarding Pipeline</CardTitle>
              <CardDescription>7 candidates in progress</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="rounded-full shadow-outline-ring h-8 text-[11px] font-bold uppercase tracking-wider">
              <Plus className="mr-1.5 size-3.5" /> View all
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex gap-0 overflow-x-auto pb-4 pt-4 scrollbar-hide">
              {PIPELINE_STAGES.map((stage) => (
                <div key={stage.label} className="flex-shrink-0 w-64 px-6 border-r border-border/30 last:border-r-0">
                  <div className="flex items-center justify-between mb-5">
                    <span className={cn(
                      "text-[10px] font-heading font-semibold uppercase tracking-[1.5px]",
                      stage.color
                    )}>
                      {stage.label}
                    </span>
                    <Badge variant="secondary" className="rounded-full bg-secondary/50 text-[10px] size-5 flex items-center justify-center p-0">
                      {stage.count}
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    {stage.items.map((item, idx) => (
                      <div key={idx} className="group relative p-4 rounded-2xl bg-white border border-border/40 shadow-soft-elevation hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex items-center gap-2.5 mb-3">
                          <Avatar className="size-7 border-2 border-white shadow-soft-elevation">
                            <AvatarFallback className={cn("text-[10px] font-bold text-white", stage.bg)}>
                              {item.initials}
                            </AvatarFallback>
                          </Avatar>
                          <Badge className={cn("text-[9px] rounded-full px-2 py-0 h-4 border-none", stage.bg, stage.textColor)}>
                            {item.dept}
                          </Badge>
                        </div>
                        <h5 className="text-[13.5px] font-semibold text-foreground mb-0.5 group-hover:text-black transition-colors">{item.name}</h5>
                        <p className="text-[11px] text-muted-foreground font-medium mb-4">{item.role}</p>
                        <div className="space-y-1.5">
                          <Progress value={item.progress} className="h-1 bg-secondary/60" indicatorClassName={stage.bg} />
                          <div className="flex items-center justify-between text-[9px] text-muted-foreground font-semibold">
                            <span>Started {item.date}</span>
                            <span>{item.progress}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Sidebar - Quick Actions & Activity */}
        <div className="space-y-8">
          
          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-5">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {QUICK_ACTIONS.map((action) => (
                  <button key={action.label} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-secondary/30 hover:bg-white hover:shadow-card hover:ring-1 hover:ring-foreground/5 transition-all duration-300 group">
                    <div className={cn("size-10 rounded-xl flex items-center justify-center shadow-outline-ring transition-transform group-hover:scale-110", action.bg, action.color)}>
                      <action.icon className="size-5" />
                    </div>
                    <div className="text-center">
                      <p className="text-[12px] font-bold text-foreground">{action.label}</p>
                      <p className="text-[9px] text-muted-foreground font-medium">{action.sub}</p>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-outline-ring">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-5">
              <CardTitle className="text-lg">Recent Activity</CardTitle>
              <Button variant="link" size="sm" className="h-auto p-0 text-blue-600 font-bold text-xs underline-offset-4 decoration-blue-200">All logs</Button>
            </CardHeader>
            <CardContent className="px-6 space-y-0">
              {ACTIVITIES.map((activity, idx) => (
                <div key={idx} className="flex gap-4 relative pb-6 last:pb-2 group">
                  {idx !== ACTIVITIES.length - 1 && (
                    <div className="absolute left-2.5 top-8 bottom-0 w-px bg-border/40 group-hover:bg-border/60 transition-colors" />
                  )}
                  <div className={cn("size-5 rounded-full mt-1 flex-shrink-0 z-10 border-[3px] border-white shadow-soft-elevation", activity.dotColor)} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h6 className="text-[13.5px] font-semibold text-foreground line-clamp-1">{activity.title}</h6>
                        <p className="text-[11.5px] text-muted-foreground/80 font-medium leading-relaxed mt-0.5">{activity.desc}</p>
                      </div>
                      <span className="text-[10px] text-muted-foreground/50 font-bold whitespace-nowrap pt-1">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Attendance Bars */}
        <Card className="shadow-outline-ring ring-1 ring-emerald-500/5">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Weekly Attendance</CardTitle>
            <CardDescription>% present per day</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
             <div className="flex items-end justify-between gap-3 h-32 px-2">
                {ATTENDANCE_DATA.map((day) => (
                  <div key={day.label} className="flex-1 flex flex-col items-center gap-3 h-full">
                    <div className="flex-1 w-full flex items-end">
                      <div 
                        className={cn("w-full rounded-t-lg transition-all duration-1000 ease-out shadow-inset-edge", day.color)} 
                        style={{ height: `${day.value}%` }} 
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider">{day.label}</p>
                      <p className="text-[11px] font-bold text-foreground">{day.value}%</p>
                    </div>
                  </div>
                ))}
             </div>
             <div className="mt-8 space-y-3 px-2">
                {ATTENDANCE_DEPT.map((dept) => (
                  <div key={dept.name} className="flex items-center gap-4">
                    <span className="text-[11px] font-bold text-muted-foreground/70 w-24 uppercase tracking-[1px]">{dept.name}</span>
                    <Progress value={dept.value} className="flex-1 h-1.5 bg-secondary/50" indicatorClassName={dept.color} />
                    <span className="text-[11px] font-heading font-normal text-foreground w-8 text-right">{dept.value}%</span>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>

        {/* Payroll Breakdown */}
        <Card className="shadow-outline-ring ring-1 ring-stone-500/5">
          <CardHeader className="pb-6">
            <CardTitle className="text-lg">Payroll Breakdown</CardTitle>
            <CardDescription>April 2025 — ৳18.4M total</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center gap-8 px-2">
              <div className="relative size-24 flex-shrink-0">
                <svg className="size-full" viewBox="0 0 100 100">
                  <circle className="text-stone-100 stroke-current" strokeWidth="12" fill="transparent" r="40" cx="50" cy="50" />
                  <circle className="text-black stroke-current transition-all duration-1000 ease-out" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.62)} strokeLinecap="round" fill="transparent" r="40" cx="50" cy="50" transform="rotate(-90 50 50)" />
                  <circle className="text-stone-400 stroke-current transition-all duration-1000 ease-out" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.18)} strokeLinecap="round" fill="transparent" r="40" cx="50" cy="50" transform="rotate(130 50 50)" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[11px] font-heading font-normal text-foreground">৳18.4M</span>
                  <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider">Total</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 gap-2.5">
                {PAYROLL_CHART.map((item) => (
                  <div key={item.label} className="flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <div className={cn("size-2 rounded-full", item.bg)} />
                      <span className="text-[11px] font-medium text-stone-500 group-hover:text-stone-900 transition-colors">{item.label}</span>
                    </div>
                    <span className="text-[11px] font-bold text-stone-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4 px-2">
              {PAYROLL_ROWS.map((row, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                   <Avatar className="size-9 border-2 border-white shadow-soft-elevation">
                      <AvatarFallback className={cn("text-[10px] font-bold text-white", row.bg)}>{row.initials}</AvatarFallback>
                   </Avatar>
                   <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-foreground group-hover:text-black transition-colors">{row.name}</p>
                      <p className="text-[10px] text-muted-foreground font-medium">{row.dept}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[13px] font-heading font-normal text-foreground tracking-tight">৳{row.amount}</p>
                      <Badge variant="outline" className={cn("text-[8px] px-1.5 h-3.5 border-none font-bold", row.statusBg, row.statusColor)}>
                        {row.status}
                      </Badge>
                   </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mini Calendar */}
        <Card className="shadow-outline-ring ring-1 ring-blue-500/5">
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-6">
            <div className="space-y-1">
              <CardTitle className="text-lg">Calendar</CardTitle>
              <CardDescription>April 2025</CardDescription>
            </div>
            <div className="flex gap-1.5">
              <Button variant="outline" size="icon" className="size-7 rounded-full border border-stone-200 shadow-outline-ring"><Plus className="size-3" /></Button>
            </div>
          </CardHeader>
          <CardContent className="px-5">
            <div className="grid grid-cols-7 gap-y-2 mb-6">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <span key={day} className="text-center text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">{day}</span>
              ))}
              {Array.from({ length: 30 }, (_, i) => i + 1).map(day => {
                const isToday = day === 18
                const hasEvent = [1, 3, 8, 10, 21, 25].includes(day)
                return (
                  <div key={day} className="relative flex items-center justify-center py-2">
                    <span className={cn(
                      "size-8 flex items-center justify-center text-[12px] font-medium rounded-full cursor-pointer transition-all",
                      isToday ? "bg-black text-white shadow-warm-lift" : "text-stone-600 hover:bg-stone-100",
                    )}>
                      {day}
                    </span>
                    {hasEvent && !isToday && <div className="absolute bottom-1 size-1 bg-stone-900 rounded-full" />}
                  </div>
                )
              })}
            </div>
            <div className="space-y-3.5">
               {UPCOMING_EVENTS.map((event, idx) => (
                 <div key={idx} className="flex items-center gap-3.5 group">
                   <div className={cn("size-2 rounded-full ring-4 ring-white shadow-sm", event.dot)} />
                   <div className="flex-1 flex items-baseline justify-between gap-2">
                      <p className="text-[11.5px] font-semibold text-stone-700 group-hover:text-black transition-colors">{event.label}</p>
                      <p className="text-[10px] text-stone-400 font-bold whitespace-nowrap">{event.date}</p>
                   </div>
                 </div>
               ))}
            </div>
          </CardContent>
        </Card>

      </div>
      
      {/* Footer spacer */}
      <div className="h-10" />
    </div>
  )
}

const PIPELINE_STAGES = [
  {
    label: "Invited",
    count: 2,
    color: "text-indigo-500",
    bg: "bg-indigo-500",
    textColor: "text-white",
    items: [
      { name: "Tahmid Hossain", role: "UI/UX Designer", dept: "Design", initials: "TH", progress: 12, date: "Apr 17" },
      { name: "Nusrat Islam", role: "Finance Analyst", dept: "Finance", initials: "NI", progress: 8, date: "Apr 16" },
    ]
  },
  {
    label: "Docs Review",
    count: 3,
    color: "text-amber-500",
    bg: "bg-amber-500",
    textColor: "text-white",
    items: [
      { name: "Mahfuz Rahman", role: "Backend Developer", dept: "IT", initials: "MR", progress: 45, date: "Apr 14" },
      { name: "Sadia Khanam", role: "Sales Executive", dept: "Sales", initials: "SK", progress: 60, date: "Apr 12" },
    ]
  },
  {
    label: "IT Setup",
    count: 1,
    color: "text-blue-500",
    bg: "bg-blue-500",
    textColor: "text-white",
    items: [
      { name: "Rifat Ahmed", role: "DevOps Engineer", dept: "IT", initials: "RA", progress: 75, date: "Apr 15" },
    ]
  },
  {
    label: "Completed",
    count: 1,
    color: "text-emerald-500",
    bg: "bg-emerald-500",
    textColor: "text-white",
    items: [
      { name: "Parisa Akter", role: "HR Coordinator", dept: "HR", initials: "PA", progress: 100, date: "Apr 10" },
    ]
  }
]

const QUICK_ACTIONS = [
  { label: "Add Employee", sub: "New hire record", icon: Users, bg: "bg-blue-50", color: "text-blue-600" },
  { label: "Mark Attendance", sub: "Today's log", icon: CalendarCheck, bg: "bg-emerald-50", color: "text-emerald-600" },
  { label: "Run Payroll", sub: "Process salaries", icon: CreditCard, bg: "bg-stone-100", color: "text-stone-700" },
  { label: "Review KPIs", sub: "Performance cycle", icon: Zap, bg: "bg-indigo-50", color: "text-indigo-600" },
]

const ACTIVITIES = [
  { title: "Parisa Akter onboarded", desc: "HR Coordinator · Docs verified", time: "2h", dotColor: "bg-emerald-500" },
  { title: "Payroll batch queued", desc: "248 employees · awaiting approval", time: "4h", dotColor: "bg-amber-500" },
  { title: "Leave — Rezaul Karim", desc: "5 days annual leave · Apr 18–22", time: "6h", dotColor: "bg-blue-500" },
  { title: "New job posted", desc: "Senior DevOps · 7 applicants", time: "1d", dotColor: "bg-indigo-500" },
  { title: "Review cycle started", desc: "Q1 2025 · 36 reviews pending", time: "2d", dotColor: "bg-rose-500" },
]

const ATTENDANCE_DATA = [
  { label: "Mon", value: 78, color: "bg-stone-800" },
  { label: "Tue", value: 92, color: "bg-stone-500" },
  { label: "Wed", value: 86, color: "bg-stone-800" },
  { label: "Thu", value: 96, color: "bg-emerald-500" },
  { label: "Fri", value: 88, color: "bg-stone-500" },
  { label: "Sat", value: 61, color: "bg-stone-300" },
]

const ATTENDANCE_DEPT = [
  { name: "Engineering", value: 96, color: "bg-black" },
  { name: "Finance", value: 91, color: "bg-stone-600" },
  { name: "Sales", value: 87, color: "bg-stone-400" },
  { name: "Operations", value: 79, color: "bg-stone-300" },
]

const PAYROLL_CHART = [
  { label: "Base Salary", value: 62, bg: "bg-black" },
  { label: "Bonuses", value: 18, bg: "bg-stone-400" },
  { label: "Benefits", value: 12, bg: "bg-stone-200" },
  { label: "Tax Deduct.", value: 8, bg: "bg-rose-400" },
]

const PAYROLL_ROWS = [
  { name: "Mahfuz Hasan", dept: "Engineering", initials: "MH", amount: "75,000", status: "Pending", bg: "bg-stone-800", statusBg: "bg-amber-100", statusColor: "text-amber-700" },
  { name: "Sumaiya Akter", dept: "Finance", initials: "SA", amount: "68,000", status: "Paid", bg: "bg-stone-600", statusBg: "bg-emerald-100", statusColor: "text-emerald-700" },
  { name: "Nasrin Begum", dept: "HR", initials: "NB", amount: "62,000", status: "Paid", bg: "bg-stone-400", statusBg: "bg-emerald-100", statusColor: "text-emerald-700" },
]

const UPCOMING_EVENTS = [
  { label: "Payroll deadline reminder", date: "Today", dot: "bg-black" },
  { label: "Q1 Performance reviews due", date: "Apr 21", dot: "bg-emerald-500" },
  { label: "Payroll disbursement", date: "Apr 25", dot: "bg-amber-500" },
]
