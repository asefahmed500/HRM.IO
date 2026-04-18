"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  Home, 
  CalendarCheck, 
  Clock, 
  CreditCard, 
  Heart, 
  BarChart3, 
  Network, 
  Search, 
  Award, 
  Settings,
  ChevronLeft
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const NAV_ITEMS = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", href: "/", icon: LayoutDashboard },
      { label: "Employees", href: "/employees", icon: Users, badge: "248" },
    ]
  },
  {
    label: "Workflow",
    items: [
      { label: "Onboarding", href: "/onboarding", icon: Home, badge: "7" },
      { label: "Attendance", href: "/attendance", icon: CalendarCheck },
      { label: "Leave", href: "/leave", icon: Clock, badge: "4" },
    ]
  },
  {
    label: "Finance",
    items: [
      { label: "Payroll", href: "/payroll", icon: CreditCard },
      { label: "Benefits", href: "/benefits", icon: Heart },
      { label: "Reports", href: "/reports", icon: BarChart3 },
    ]
  },
  {
    label: "Organization",
    items: [
      { label: "Org Chart", href: "/orgchart", icon: Network },
      { label: "Recruitment", href: "/recruitment", icon: Search, badge: "14" },
      { label: "Performance", href: "/performance", icon: Award },
    ]
  },
  {
    label: "System",
    items: [
      { label: "Settings", href: "/settings", icon: Settings },
    ]
  }
]

export function Sidebar({ className, collapsed, onToggle }: { className?: string, collapsed?: boolean, onToggle?: () => void }) {
  const pathname = usePathname()

  return (
    <aside className={cn(
      "relative flex flex-col bg-background border-r transition-all duration-300 ease-in-out z-50",
      collapsed ? "w-20" : "w-64",
      className
    )}>
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 h-20 flex-shrink-0">
        <div className="size-9 rounded-xl bg-black flex items-center justify-center text-white font-heading font-bold text-sm shadow-warm-lift">
          Em
        </div>
        {!collapsed && (
          <span className="font-heading text-xl font-light tracking-tight">
            Emley<em className="not-italic text-muted-foreground font-normal">HRM</em>
          </span>
        )}
      </div>

      {/* Toggle Button */}
      <Button
        variant="outline"
        size="icon-xs"
        className={cn(
          "absolute -right-3.5 top-7 size-7 rounded-full bg-background border shadow-outline-ring transition-transform",
          collapsed && "rotate-180"
        )}
        onClick={onToggle}
      >
        <ChevronLeft className="size-3.5" />
      </Button>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-6 py-4">
          {NAV_ITEMS.map((section) => (
            <div key={section.label} className="space-y-1">
              {!collapsed && (
                <h4 className="px-4 text-[10px] font-heading font-normal uppercase tracking-[1.5px] text-muted-foreground/60 mb-2">
                  {section.label}
                </h4>
              )}
              {section.items.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <div className={cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-full transition-all group relative",
                      isActive 
                        ? "bg-black text-white shadow-warm-lift" 
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}>
                      <item.icon className={cn(
                        "size-4.5 transition-colors",
                        isActive ? "text-white" : "group-hover:text-foreground"
                      )} />
                      {!collapsed && (
                        <>
                          <span className="flex-1 text-[14.5px] font-medium tracking-[0.15px]">{item.label}</span>
                          {item.badge && (
                            <span className={cn(
                              "text-[10px] font-bold px-2 py-0.5 rounded-full",
                              isActive ? "bg-white/20 text-white" : "bg-secondary text-muted-foreground"
                            )}>
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                      {collapsed && isActive && (
                        <div className="absolute left-0 w-1 h-5 bg-black rounded-r-full shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* User Footer */}
      <div className="p-4 border-t border-border/50">
        <div className={cn(
          "flex items-center gap-3 p-2 rounded-2xl hover:bg-secondary transition-colors cursor-pointer group",
          collapsed && "justify-center"
        )}>
          <div className="size-9 rounded-full bg-gradient-to-br from-stone-400 to-stone-600 flex items-center justify-center text-white font-bold text-xs shadow-soft-elevation border border-white/20">
            AR
          </div>
          {!collapsed && (
            <div className="flex flex-col min-w-0 overflow-hidden">
              <span className="text-sm font-semibold truncate">Asef Rahman</span>
              <span className="text-[11px] text-muted-foreground truncate font-medium">HR Administrator</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
