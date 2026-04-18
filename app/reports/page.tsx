import * as React from "react"
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  FileText, 
  Download, 
  ChevronRight,
  Plus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function ReportsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Analytics & Reports</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Data-driven insights into your organization&apos;s performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
            <Plus className="mr-2 size-4" /> Create Custom Report
          </Button>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {REPORTS.map((rpt) => (
           <Card key={rpt.title} className="group hover:shadow-card hover:border-stone-300 transition-all duration-300 cursor-pointer overflow-hidden border-stone-200/60">
              <div className="flex items-center p-8 gap-6">
                 <div className={cn("size-16 rounded-2xl flex items-center justify-center shadow-soft-elevation flex-shrink-0 group-hover:scale-105 transition-transform duration-500", rpt.bg, rpt.color)}>
                    <rpt.icon className="size-8" />
                 </div>
                 <div className="flex-1 min-w-0">
                    <CardTitle className="text-xl group-hover:text-black transition-colors">{rpt.title}</CardTitle>
                    <CardDescription className="text-[14px] leading-relaxed pt-1 line-clamp-2">{rpt.desc}</CardDescription>
                 </div>
                 <ChevronRight className="size-5 text-stone-300 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
              </div>
           </Card>
         ))}
      </div>

      {/* Featured Insights */}
      <div className="space-y-6">
         <h3 className="text-2xl font-heading font-light tracking-tight px-2">Featured Insights</h3>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INSIGHTS.map((insight) => (
               <Card key={insight.label} className="border-none shadow-outline-ring bg-stone-50/50 hover:bg-white transition-colors duration-500 group">
                  <CardHeader>
                     <p className="text-[10px] font-heading font-bold uppercase tracking-[2px] text-muted-foreground/50 mb-4">{insight.label}</p>
                     <div className="flex items-baseline gap-2 mb-2">
                        <h4 className="text-3xl font-heading font-light tracking-tight">{insight.value}</h4>
                        <span className={cn("text-[11px] font-bold px-1.5 py-0.5 rounded-md", insight.deltaType === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600')}>
                           {insight.delta}
                        </span>
                     </div>
                     <CardDescription className="text-[13px] font-medium leading-relaxed">{insight.desc}</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-2 border-none">
                     <Button variant="link" className="p-0 text-black font-bold text-xs uppercase tracking-widest decoration-stone-300 underline-offset-4">View Report →</Button>
                  </CardFooter>
               </Card>
            ))}
         </div>
      </div>
    </div>
  )
}

const REPORTS = [
  { title: "Turnover Analytics", desc: "Analyze employee retention and churn rates across different departments.", icon: TrendingUp, bg: "bg-rose-50", color: "text-rose-600" },
  { title: "Diversity & Inclusion", desc: "Breakdown of organization demographics by gender, age, and location.", icon: PieChart, bg: "bg-blue-50", color: "text-blue-600" },
  { title: "Salary Benchmarking", desc: "Compare internal salaries against market standards for similar roles.", icon: BarChart3, bg: "bg-emerald-50", color: "text-emerald-600" },
  { title: "Hiring Pipeline", desc: "Funnel analysis of recruitment stages from application to offer.", icon: FileText, bg: "bg-indigo-50", color: "text-indigo-600" },
]

const INSIGHTS = [
  { label: "Retention Rate", value: "94.2%", delta: "+1.8%", deltaType: "up", desc: "Higher than industry average (86%) for tech organizations." },
  { label: "Avg. Tenure", value: "3.4y", delta: "+0.4y", deltaType: "up", desc: "Increasing tenure indicates high employee satisfaction." },
  { label: "Cost Per Hire", value: "৳42.5k", delta: "-৳2.1k", deltaType: "down", desc: "Referral program has successfully reduced recruitment costs." },
]
