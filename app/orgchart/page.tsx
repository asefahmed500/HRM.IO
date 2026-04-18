import * as React from "react"
import { 
  Users, 
  Search, 
  Plus, 
  ZoomIn, 
  ZoomOut, 
  Maximize2 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function OrgChartPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Organization Chart</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Visualize the hierarchy and reporting lines of the company.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-stone-100/50 border border-stone-200 rounded-full p-1 shadow-inset-edge">
             <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-white hover:shadow-soft-elevation"><ZoomIn className="size-4" /></Button>
             <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-white hover:shadow-soft-elevation"><ZoomOut className="size-4" /></Button>
             <div className="w-px h-4 bg-stone-200 mx-1" />
             <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-white hover:shadow-soft-elevation"><Maximize2 className="size-4" /></Button>
          </div>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
             Export Diagram
          </Button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex items-center gap-4 max-w-xl mx-auto px-4">
         <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 group-focus-within:text-black transition-colors" />
            <input placeholder="Search for an employee or role…" className="w-full h-14 pl-12 pr-6 bg-white border border-stone-200 rounded-full text-sm font-medium shadow-card focus:ring-1 focus:ring-black outline-none transition-all" />
         </div>
      </div>

      {/* Org Tree Visualization */}
      <div className="org-container relative min-h-[600px] flex items-start justify-center overflow-x-auto py-10 scrollbar-hide">
         <div className="flex flex-col items-center">
            
            {/* CEO / Root */}
            <OrgNode name="Asef Rahman" role="CEO & Founder" initials="AR" dept="Leadership" isRoot />
            
            <div className="h-10 w-px bg-stone-300 relative">
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 md:w-[600px] h-px bg-stone-300" />
            </div>
            
            {/* Departments */}
            <div className="flex gap-8 md:gap-24 pt-10 relative">
               <div className="flex flex-col items-center relative">
                  <div className="h-10 w-px bg-stone-300 absolute top-[-40px]" />
                  <OrgNode name="Mahfuz Hasan" role="VP Engineering" initials="MH" dept="Engineering" />
                  <div className="h-8 w-px bg-stone-200" />
                  <div className="flex gap-8">
                     <OrgNode name="Rifat Ahmed" role="DevOps Lead" initials="RA" dept="Engineering" />
                     <OrgNode name="Sadia Islam" role="Fullstack Dev" initials="SI" dept="Engineering" />
                  </div>
               </div>

               <div className="flex flex-col items-center relative">
                  <div className="h-10 w-px bg-stone-300 absolute top-[-40px]" />
                  <OrgNode name="Sumaiya Akter" role="VP Product & Design" initials="SA" dept="Design" />
                  <div className="h-8 w-px bg-stone-200" />
                  <div className="flex gap-8">
                     <OrgNode name="Tahmid Hossain" role="UI Designer" initials="TH" dept="Design" />
                  </div>
               </div>

               <div className="flex flex-col items-center relative">
                  <div className="h-10 w-px bg-stone-300 absolute top-[-40px]" />
                  <OrgNode name="Nasrin Begum" role="VP Finance" initials="NB" dept="Finance" />
                  <div className="h-8 w-px bg-stone-200" />
                  <div className="flex gap-8">
                     <OrgNode name="Kamrul Islam" role="Accountant" initials="KI" dept="Finance" />
                  </div>
               </div>
            </div>

         </div>
      </div>
    </div>
  )
}

function OrgNode({ name, role, initials, dept, isRoot }: any) {
   return (
      <Card className={cn(
         "w-56 p-5 text-center group hover:scale-105 transition-all duration-500 cursor-pointer border-stone-200/60",
         isRoot ? "shadow-warm-lift border-stone-300 ring-2 ring-stone-900/5" : "shadow-card hover:shadow-warm-lift"
      )}>
         <Avatar className="size-12 mx-auto border-4 border-white shadow-soft-elevation mb-3 group-hover:rotate-6 transition-transform duration-500">
            <AvatarFallback className={cn("text-xs font-bold text-white", isRoot ? "bg-black" : "bg-stone-400")}>{initials}</AvatarFallback>
         </Avatar>
         <h4 className="text-[14.5px] font-bold text-stone-900 truncate">{name}</h4>
         <p className="text-[11.5px] text-stone-400 font-semibold uppercase tracking-wider mt-1">{role}</p>
         <Badge variant="secondary" className="mt-3 rounded-full bg-secondary/50 text-[9px] font-bold uppercase tracking-widest">{dept}</Badge>
      </Card>
   )
}
