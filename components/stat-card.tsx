import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface StatCardProps {
  label: string
  value: string | number
  subValue?: string
  delta?: string
  deltaType?: "up" | "down" | "neutral"
  icon: LucideIcon
  iconClassName?: string
  className?: string
}

export function StatCard({ 
  label, 
  value, 
  subValue, 
  delta, 
  deltaType, 
  icon: Icon, 
  iconClassName,
  className 
}: StatCardProps) {
  return (
    <Card className={cn("relative group transition-all duration-300", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-[11px] font-heading font-normal uppercase tracking-[1.5px] text-muted-foreground/70">
            {label}
          </p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-3xl font-heading font-light tracking-tight text-foreground">
              {value}
            </h3>
            {subValue && (
              <span className="text-sm font-heading font-light text-muted-foreground/60 align-top">
                {subValue}
              </span>
            )}
          </div>
          {delta && (
            <p className={cn(
              "text-[11px] font-medium tracking-tight",
              deltaType === "up" && "text-emerald-600",
              deltaType === "down" && "text-rose-600",
              deltaType === "neutral" && "text-muted-foreground"
            )}>
              {deltaType === "up" && "↑"}
              {deltaType === "down" && "↓"}
              {" "}{delta}
            </p>
          )}
        </div>
        <div className={cn(
          "size-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500",
          iconClassName || "bg-secondary"
        )}>
          <Icon className="size-5.5" />
        </div>
      </div>
      
      {/* Subtle bottom accent line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        deltaType === "up" ? "bg-emerald-500/30" : deltaType === "down" ? "bg-rose-500/30" : "bg-primary/20"
      )} />
    </Card>
  )
}
