import * as React from "react"
import { 
  Search, 
  Plus, 
  Filter, 
  Download, 
  MoreVertical, 
  Mail, 
  Phone,
  Users,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function EmployeesPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Employees</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Manage and view all members of your organization.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="shadow-outline-ring">
            <Download className="mr-2 size-4" /> Export CSV
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
            <Plus className="mr-2 size-4" /> Add Employee
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EMPLOYEE_STATS.map((stat) => (
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

      {/* Filters & Search */}
      <Card className="shadow-outline-ring ring-1 ring-stone-500/5">
        <CardContent className="p-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50" />
            <Input 
              placeholder="Search by name, email, department..." 
              className="pl-10 h-11 bg-secondary/30 border-transparent focus:bg-background rounded-2xl"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="h-11 px-5 rounded-2xl shadow-outline-ring">
              <Filter className="mr-2 size-4" /> Filters
            </Button>
            <select className="h-11 px-4 bg-secondary/30 border-transparent rounded-2xl text-sm font-medium focus:ring-1 focus:ring-stone-200 outline-none">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
            <select className="h-11 px-4 bg-secondary/30 border-transparent rounded-2xl text-sm font-medium focus:ring-1 focus:ring-stone-200 outline-none">
              <option>Active Status</option>
              <option>On Leave</option>
              <option>Terminated</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Employee Table */}
      <Card className="overflow-hidden shadow-card border-none">
        <Table>
          <TableHeader className="bg-stone-50/50">
            <TableRow className="hover:bg-transparent border-b-border/40">
              <TableHead className="w-[300px] h-14 font-heading font-semibold uppercase tracking-wider text-[10px]">Employee</TableHead>
              <TableHead className="h-14 font-heading font-semibold uppercase tracking-wider text-[10px]">Role / Dept</TableHead>
              <TableHead className="h-14 font-heading font-semibold uppercase tracking-wider text-[10px]">Joined Date</TableHead>
              <TableHead className="h-14 font-heading font-semibold uppercase tracking-wider text-[10px]">Status</TableHead>
              <TableHead className="h-14 font-heading font-semibold uppercase tracking-wider text-[10px]">Contact</TableHead>
              <TableHead className="w-[60px] h-14"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {EMPLOYEES.map((employee) => (
              <TableRow key={employee.id} className="group transition-colors border-b-border/30">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10 border-2 border-white shadow-soft-elevation">
                      <AvatarImage src={employee.image} />
                      <AvatarFallback className="bg-stone-100 font-bold text-xs text-stone-500">
                        {employee.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[14.5px] group-hover:text-black transition-colors">{employee.name}</span>
                      <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-tight">{employee.id}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-medium text-foreground">{employee.role}</span>
                    <span className="text-[11.5px] text-muted-foreground">{employee.dept}</span>
                  </div>
                </TableCell>
                <TableCell className="text-[13.5px] font-medium text-stone-600">{employee.joined}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn("rounded-full border-none px-2.5 py-0.5 font-bold text-[10px]", employee.statusBg, employee.statusColor)}>
                    {employee.status}
                  </Badge>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon-xs" className="rounded-full hover:bg-stone-100"><Mail className="size-3.5 text-stone-400" /></Button>
                      <Button variant="ghost" size="icon-xs" className="rounded-full hover:bg-stone-100"><Phone className="size-3.5 text-stone-400" /></Button>
                   </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="size-8 rounded-full">
                        <MoreVertical className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 rounded-2xl shadow-card border-border/40">
                      <DropdownMenuItem className="rounded-xl py-2 px-3 text-sm font-medium">View Profile</DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl py-2 px-3 text-sm font-medium">Edit Details</DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl py-2 px-3 text-sm font-medium text-destructive">Terminate</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      
      {/* Pagination Placeholder */}
      <div className="flex items-center justify-between px-2">
         <p className="text-[13px] text-muted-foreground font-medium">Showing <span className="text-foreground font-bold">1–10</span> of 248 employees</p>
         <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-xl" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="rounded-xl bg-black text-white hover:bg-black/90 hover:text-white shadow-warm-lift">1</Button>
            <Button variant="outline" size="sm" className="rounded-xl">2</Button>
            <Button variant="outline" size="sm" className="rounded-xl">3</Button>
            <Button variant="outline" size="sm" className="rounded-xl">Next</Button>
         </div>
      </div>
    </div>
  )
}

const EMPLOYEE_STATS = [
  { label: "Total Headcount", value: "248", icon: Users, bg: "bg-blue-50", color: "text-blue-600" },
  { label: "New Hires (MTD)", value: "12", icon: Plus, bg: "bg-emerald-50", color: "text-emerald-600" },
  { label: "On Leave", value: "8", icon: Calendar, bg: "bg-amber-50", color: "text-amber-700" },
]

const EMPLOYEES = [
  { 
    id: "EMP-001", 
    name: "Mahfuz Hasan", 
    role: "Senior Lead Engineer", 
    dept: "Engineering", 
    joined: "Aug 12, 2021", 
    status: "Active", 
    initials: "MH",
    image: "",
    statusBg: "bg-emerald-100", 
    statusColor: "text-emerald-700" 
  },
  { 
    id: "EMP-002", 
    name: "Sumaiya Akter", 
    role: "UX Strategy Lead", 
    dept: "Design", 
    joined: "Jan 05, 2022", 
    status: "On Leave", 
    initials: "SA",
    image: "",
    statusBg: "bg-amber-100", 
    statusColor: "text-amber-700" 
  },
  { 
    id: "EMP-003", 
    name: "Nasrin Begum", 
    role: "Finance Manager", 
    dept: "Finance", 
    joined: "Mar 22, 2019", 
    status: "Active", 
    initials: "NB",
    image: "",
    statusBg: "bg-emerald-100", 
    statusColor: "text-emerald-700" 
  },
  { 
    id: "EMP-004", 
    name: "Tahmid Hossain", 
    role: "Marketing Associate", 
    dept: "Marketing", 
    joined: "Nov 15, 2023", 
    status: "Active", 
    initials: "TH",
    image: "",
    statusBg: "bg-emerald-100", 
    statusColor: "text-emerald-700" 
  },
  { 
    id: "EMP-005", 
    name: "Rifat Ahmed", 
    role: "HR Generalist", 
    dept: "HR", 
    joined: "Feb 10, 2024", 
    status: "Active", 
    initials: "RA",
    image: "",
    statusBg: "bg-emerald-100", 
    statusColor: "text-emerald-700" 
  },
]
