import * as React from "react"
import { 
  Heart, 
  ShieldCheck, 
  Activity, 
  Baby, 
  Plane, 
  BookOpen, 
  Plus,
  ChevronRight,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function BenefitsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Employee Benefits</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Wellness programs, insurance, and welfare initiatives.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="shadow-outline-ring">
            Benefits Policy
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
             Enroll Member
          </Button>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {BENEFITS.map((ben) => (
           <Card key={ben.title} className="group hover:shadow-warm-lift hover:border-stone-300 transition-all duration-500 overflow-hidden relative">
              <CardHeader className="pb-4">
                 <div className={cn("size-14 rounded-2xl flex items-center justify-center mb-6 shadow-soft-elevation group-hover:scale-110 transition-transform duration-500", ben.bg, ben.color)}>
                    <ben.icon className="size-7" />
                 </div>
                 <CardTitle className="text-2xl">{ben.title}</CardTitle>
                 <CardDescription className="text-[14.5px] leading-relaxed pt-1">{ben.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                 <ul className="space-y-3">
                    {ben.features.map((f, i) => (
                       <li key={i} className="flex items-center gap-2.5 text-[13px] font-medium text-stone-600">
                          <CheckCircle2 className="size-3.5 text-stone-300" />
                          {f}
                       </li>
                    ))}
                 </ul>
              </CardContent>
              <CardFooter className="pt-6 border-t border-border/40 flex items-center justify-between">
                 <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">{ben.enrolled} Enrolled</span>
                 <Button variant="ghost" size="sm" className="rounded-full font-bold text-[11px] uppercase tracking-widest text-black group-hover:bg-secondary">
                    View Details <ChevronRight className="ml-1 size-3" />
                 </Button>
              </CardFooter>
              {/* Background accent */}
              <div className={cn("absolute -bottom-4 -right-4 size-24 opacity-5 blur-2xl rounded-full", ben.bg)} />
           </Card>
         ))}
      </div>

      {/* Welfare Initiatives */}
      <Card className="bg-stone-950 text-white shadow-warm-lift border-none overflow-hidden relative">
         <div className="flex flex-col md:flex-row items-center gap-8 p-10 relative z-10">
            <div className="flex-1 space-y-4">
               <Badge className="bg-emerald-500 text-white border-none rounded-full px-3 py-1 font-bold text-[10px] uppercase tracking-widest">Featured Initiative</Badge>
               <h3 className="text-3xl font-heading font-light tracking-tight">Mental Health Awareness Month</h3>
               <p className="text-stone-400 text-lg leading-relaxed max-w-xl">
                  Get 100% reimbursement for wellness apps and therapy sessions throughout April. Professional development workshops start next week.
               </p>
               <div className="flex gap-4 pt-4">
                  <Button className="bg-white text-black hover:bg-stone-200 rounded-2xl font-bold h-12 px-8">Learn More</Button>
                  <Button variant="outline" className="border-stone-700 text-white hover:bg-stone-900 rounded-2xl font-bold h-12 px-8">Schedule Workshop</Button>
               </div>
            </div>
            <div className="size-48 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/20 flex items-center justify-center border border-white/5 backdrop-blur-3xl shadow-2xl">
               <Activity className="size-20 text-emerald-400/50" />
            </div>
         </div>
         {/* Decoration */}
         <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 bg-emerald-500/10 blur-[100px] rounded-full" />
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-80 bg-blue-500/10 blur-[100px] rounded-full" />
      </Card>
    </div>
  )
}

const BENEFITS = [
  { 
    title: "Health Insurance", 
    desc: "Comprehensive coverage for medical, dental, and vision for employees and dependents.", 
    icon: ShieldCheck, 
    bg: "bg-blue-50", 
    color: "text-blue-600",
    features: ["Zero deductible plan", "Family coverage included", "Annual wellness bonus"],
    enrolled: "242"
  },
  { 
    title: "Retirement Plan", 
    desc: "401(k) matching program to help you secure your financial future with expert guidance.", 
    icon: Heart, 
    bg: "bg-rose-50", 
    color: "text-rose-600",
    features: ["5% company match", "Immediate vesting", "Financial planning tools"],
    enrolled: "198"
  },
  { 
    title: "Learning & Dev.", 
    desc: "Annual budget for courses, books, and conferences to sharpen your professional skills.", 
    icon: BookOpen, 
    bg: "bg-indigo-50", 
    color: "text-indigo-600",
    features: ["৳50k annual budget", "Subscription access", "Weekly study time"],
    enrolled: "156"
  },
  { 
    title: "Family Support", 
    desc: "Generous parental leave and childcare support for new parents and growing families.", 
    icon: Baby, 
    bg: "bg-amber-50", 
    color: "text-amber-700",
    features: ["16 weeks paid leave", "Childcare stipends", "Flexible return phase"],
    enrolled: "14"
  },
  { 
    title: "Vacation & Travel", 
    desc: "Generous PTO policy and annual travel stipends to ensure you take the rest you deserve.", 
    icon: Plane, 
    bg: "bg-cyan-50", 
    color: "text-cyan-600",
    features: ["25 days standard PTO", "৳25k travel voucher", "Sabbatical options"],
    enrolled: "248"
  },
  { 
    title: "Wellness Grant", 
    desc: "Monthly stipend for gym memberships, fitness gear, or wellness activities.", 
    icon: Activity, 
    bg: "bg-emerald-50", 
    color: "text-emerald-600",
    features: ["৳5k monthly allowance", "On-site yoga sessions", "Fitness challenges"],
    enrolled: "182"
  },
]
