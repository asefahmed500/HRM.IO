import * as React from "react"
import { 
  CreditCard, 
  TrendingUp, 
  ArrowUpRight, 
  Download, 
  MoreVertical,
  Plus,
  Filter,
  CheckCircle2,
  Clock
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
import { cn } from "@/lib/utils"

export default function PayrollPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Payroll</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Manage salary disbursements and tax documentation.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="shadow-outline-ring">
            <Download className="mr-2 size-4" /> Tax Reports
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
             Process Payroll
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCardSimple label="Total Disbursement" value="৳18.4M" delta="+2.1%" deltaType="up" />
        <StatCardSimple label="Avg. Net Salary" value="৳74,200" delta="+৳1,200" deltaType="up" />
        <StatCardSimple label="Next Payout" value="Apr 25" sub="7 days left" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         
         {/* Payroll List */}
         <div className="xl:col-span-2 space-y-6">
            <div className="flex items-center justify-between px-2">
               <h3 className="text-lg font-heading font-semibold tracking-tight">Current Batch — Apr 2025</h3>
               <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="rounded-full shadow-outline-ring font-bold text-[10px] uppercase h-8 px-4">All Batches</Button>
                  <Button variant="outline" size="sm" className="rounded-full shadow-outline-ring font-bold text-[10px] uppercase h-8 px-4"><Filter className="mr-1.5 size-3.5" /> Filter</Button>
               </div>
            </div>

            <Card className="overflow-hidden shadow-card border-none">
               <Table>
                  <TableHeader className="bg-stone-50/50">
                     <TableRow className="h-14 border-b-border/40">
                        <TableHead className="w-[280px] px-6 font-heading font-semibold text-[10px] uppercase tracking-wider">Employee</TableHead>
                        <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Gross Pay</TableHead>
                        <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Deductions</TableHead>
                        <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Net Pay</TableHead>
                        <TableHead className="font-heading font-semibold text-[10px] uppercase tracking-wider">Status</TableHead>
                        <TableHead className="w-[60px]"></TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {PAYROLL_LIST.map((row, idx) => (
                        <TableRow key={idx} className="group border-b-border/30">
                           <TableCell className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                 <Avatar className="size-9 border-2 border-white shadow-soft-elevation">
                                    <AvatarFallback className={cn("bg-stone-100 font-bold text-[10px] text-stone-500")}>{row.initials}</AvatarFallback>
                                 </Avatar>
                                 <div className="flex flex-col">
                                    <span className="font-semibold text-[14px] group-hover:text-black transition-colors">{row.name}</span>
                                    <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-tight">{row.dept}</span>
                                 </div>
                              </div>
                           </TableCell>
                           <TableCell className="text-[13px] font-medium text-stone-500 font-mono tracking-tighter">৳{row.gross}</TableCell>
                           <TableCell className="text-[13px] font-medium text-rose-500/80 font-mono tracking-tighter">-৳{row.deductions}</TableCell>
                           <TableCell className="text-[14px] font-bold text-stone-900 font-mono tracking-tighter">৳{row.net}</TableCell>
                           <TableCell>
                              <Badge variant="outline" className={cn("rounded-full border-none px-2.5 py-0.5 font-bold text-[9px] uppercase", row.statusBg, row.statusColor)}>
                                 {row.status}
                              </Badge>
                           </TableCell>
                           <TableCell>
                              <Button variant="ghost" size="icon" className="size-8 rounded-full"><MoreVertical className="size-4" /></Button>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </Card>
         </div>

         {/* Sidebar Components */}
         <div className="space-y-8">
            <Card className="shadow-card border-none overflow-hidden bg-stone-50 relative">
               <CardHeader>
                  <CardTitle className="text-lg">Payroll Summary</CardTitle>
                  <CardDescription>Estimated totals for current cycle</CardDescription>
               </CardHeader>
               <CardContent className="space-y-5 relative z-10">
                  {SUMMARY_ITEMS.map((item, idx) => (
                     <div key={idx} className="flex items-center justify-between">
                        <span className="text-[13px] font-medium text-stone-500">{item.label}</span>
                        <span className={cn("text-[14px] font-bold font-mono tracking-tighter", item.color)}>৳{item.value}</span>
                     </div>
                  ))}
                  <div className="pt-4 border-t border-stone-200 mt-2">
                     <div className="flex items-center justify-between mb-6">
                        <span className="text-[14px] font-bold text-stone-900">Total Net Payout</span>
                        <span className="text-xl font-heading font-light tracking-tight text-black">৳16.84M</span>
                     </div>
                     <Button className="w-full bg-black text-white hover:bg-black/90 rounded-2xl font-bold shadow-warm-lift h-12">
                        Review Batch
                     </Button>
                  </div>
               </CardContent>
               {/* Abstract pattern */}
               <div className="absolute bottom-0 right-0 -mb-8 -mr-8 size-40 bg-stone-200/40 blur-3xl rounded-full" />
            </Card>

            <Card className="shadow-outline-ring border-none">
               <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Payment History</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  {HISTORY.map((h, idx) => (
                     <div key={idx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-secondary/30 transition-all group cursor-pointer border border-transparent hover:border-stone-100">
                        <div className="flex items-center gap-3.5">
                           <div className="size-9 rounded-xl bg-white shadow-soft-elevation flex items-center justify-center border border-stone-100 group-hover:border-stone-200 transition-colors">
                              <CheckCircle2 className="size-4.5 text-emerald-500" />
                           </div>
                           <div>
                              <p className="text-[13.5px] font-semibold text-stone-800">{h.period}</p>
                              <p className="text-[11px] text-muted-foreground font-medium">{h.date}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-[13.5px] font-bold text-stone-900 font-mono tracking-tighter">৳{h.amount}</p>
                           <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Disbursed</p>
                        </div>
                     </div>
                  ))}
                  <Button variant="link" className="w-full text-stone-400 font-bold text-xs uppercase tracking-widest decoration-stone-200 underline-offset-4 hover:text-stone-900 transition-colors pt-2">View full history →</Button>
               </CardContent>
            </Card>
         </div>

      </div>
    </div>
  )
}

function StatCardSimple({ label, value, sub, delta, deltaType }: any) {
   return (
      <Card className="p-6">
         <p className="text-[11px] font-heading font-semibold uppercase tracking-[2px] text-muted-foreground/60 mb-2">{label}</p>
         <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-heading font-light tracking-tight">{value}</h3>
            {delta && (
               <span className={cn("text-[11px] font-bold px-1.5 py-0.5 rounded-md", deltaType === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600')}>
                  {delta}
               </span>
            )}
         </div>
         {sub && <p className="text-[11px] font-medium text-stone-400 mt-1 uppercase tracking-tighter">{sub}</p>}
      </Card>
   )
}

const PAYROLL_LIST = [
  { name: "Mahfuz Hasan", dept: "Engineering", initials: "MH", gross: "85,000", deductions: "7,500", net: "77,500", status: "Processed", statusBg: "bg-emerald-100", statusColor: "text-emerald-700" },
  { name: "Sumaiya Akter", dept: "Design", initials: "SA", gross: "72,000", deductions: "6,200", net: "65,800", status: "Processed", statusBg: "bg-emerald-100", statusColor: "text-emerald-700" },
  { name: "Nasrin Begum", dept: "Finance", initials: "NB", gross: "68,000", deductions: "5,800", net: "62,200", status: "Pending", statusBg: "bg-amber-100", statusColor: "text-amber-700" },
  { name: "Tahmid Hossain", dept: "Marketing", initials: "TH", gross: "58,000", deductions: "4,500", net: "53,500", status: "On Hold", statusBg: "bg-stone-100", statusColor: "text-stone-500" },
]

const SUMMARY_ITEMS = [
  { label: "Base Salaries", value: "15.42M", color: "text-stone-900" },
  { label: "Performance Bonuses", value: "2.10M", color: "text-stone-900" },
  { label: "Tax Deductions (Co.)", value: "1.24M", color: "text-rose-500" },
  { label: "Welfare Fund", value: "0.84M", color: "text-stone-900" },
]

const HISTORY = [
  { period: "March 2025", date: "Mar 25, 2025", amount: "17.92M" },
  { period: "February 2025", date: "Feb 25, 2025", amount: "18.15M" },
  { period: "January 2025", date: "Jan 24, 2025", amount: "17.84M" },
]
