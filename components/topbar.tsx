"use client"

import * as React from "react"
import { 
  Bell, 
  Search, 
  Menu, 
  UserCircle
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePathname } from "next/navigation"

const PAGE_TITLES: Record<string, string> = {
  "/": "Dashboard",
  "/employees": "Employees",
  "/onboarding": "Onboarding",
  "/attendance": "Attendance",
  "/leave": "Leave Management",
  "/payroll": "Payroll",
  "/benefits": "Benefits",
  "/reports": "Reports",
  "/orgchart": "Org Chart",
  "/recruitment": "Recruitment",
  "/performance": "Performance",
  "/settings": "Settings"
}

export function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const pathname = usePathname()
  const title = PAGE_TITLES[pathname] || "HR Management"

  return (
    <header className="sticky top-0 z-40 w-full h-20 border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full items-center px-8 gap-6">
        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden -ml-2"
          onClick={onMenuClick}
        >
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Title / Breadcrumb */}
        <div className="flex-1 flex flex-col gap-0.5">
          <h1 className="text-xl font-heading font-light tracking-tight text-foreground">
            {title}
            <span className="ml-3 text-[13px] font-sans font-normal text-muted-foreground/60 tracking-normal">
              / Human Resources
            </span>
          </h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center relative w-72">
          <Search className="absolute left-3.5 size-4 text-muted-foreground/50 pointer-events-none" />
          <Input 
            placeholder="Search employees…" 
            className="pl-10 h-10 bg-secondary/50 border-transparent focus:bg-background focus:border-border rounded-full transition-all text-sm shadow-inset-edge"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="size-10 rounded-full border shadow-outline-ring hover:bg-secondary">
            <Bell className="size-4.5 text-muted-foreground" />
            <div className="absolute top-2.5 right-2.5 size-2 bg-black rounded-full border-2 border-background shadow-soft-elevation" />
          </Button>
          
          <Button variant="outline" size="icon" className="size-10 rounded-full border shadow-outline-ring hover:bg-secondary">
            <UserCircle className="size-4.5 text-muted-foreground" />
          </Button>

          <div className="size-10 rounded-full bg-gradient-to-br from-stone-400 to-stone-600 flex items-center justify-center text-white font-bold text-xs shadow-soft-elevation border-2 border-white cursor-pointer hover:scale-105 transition-transform">
            AR
          </div>
        </div>
      </div>
    </header>
  )
}
