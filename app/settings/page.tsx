"use client"

import * as React from "react"
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Database, 
  CreditCard,
  Save,
  Check,
  Building2,
  Lock,
  BellRing,
  Settings2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function SettingsPage() {
  const [isSaving, setIsSaving] = React.useState(false)

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => setIsSaving(false), 2000)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 px-4 md:px-0">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-stone-100">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-stone-900">Settings</h2>
          <p className="mt-2 text-[15px] text-muted-foreground/80 font-medium">Manage your organizational preferences and system configurations.</p>
        </div>
        <Button 
          size="lg" 
          onClick={handleSave}
          className={cn(
            "bg-black text-white hover:bg-black/90 shadow-warm-lift transition-all h-12 px-8 rounded-2xl font-bold min-w-44",
            isSaving && "bg-emerald-600 hover:bg-emerald-600"
          )}
        >
          {isSaving ? (
            <><Check className="mr-2.5 size-4" /> Changes Saved</>
          ) : (
            <><Save className="mr-2.5 size-4" /> Save Changes</>
          )}
        </Button>
      </div>

      {/* Settings Grid Layout */}
      <Tabs defaultValue="profile" orientation="vertical" className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
        
        {/* Modern Sidebar Navigation */}
        <aside className="space-y-6">
          <div className="bg-white border border-stone-200/60 rounded-[32px] p-2.5 shadow-card ring-1 ring-stone-900/5">
            <TabsList className="flex flex-col h-auto w-full bg-transparent p-0 gap-1 border-none">
              {SETTING_TABS.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className="w-full justify-start items-center gap-4 rounded-[20px] px-5 py-4 text-[14px] font-bold text-stone-500 hover:bg-stone-50 hover:text-stone-900 hover:translate-x-1 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-warm-lift data-[state=active]:translate-x-0 transition-all group min-h-[52px]"
                >
                  <div className="size-5 flex items-center justify-center shrink-0">
                    <tab.icon className="size-full group-data-[state=active]:text-white transition-colors" />
                  </div>
                  <span className="whitespace-nowrap">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Quick Help Card */}
          <div className="bg-stone-900 rounded-[24px] p-6 text-white relative overflow-hidden shadow-warm-lift hidden lg:block">
            <div className="relative z-10 space-y-3">
               <Settings2 className="size-6 text-stone-400" />
               <h4 className="text-sm font-bold uppercase tracking-widest text-stone-300">Need help?</h4>
               <p className="text-xs font-medium text-stone-400 leading-relaxed">Check our system guides or contact support for advanced configuration assistance.</p>
               <Button variant="link" className="p-0 h-auto text-white font-bold text-xs underline decoration-stone-700 underline-offset-4">View Docs →</Button>
            </div>
            <div className="absolute top-0 right-0 -mr-6 -mt-6 size-24 bg-white/5 blur-2xl rounded-full" />
          </div>
        </aside>

        {/* Content Area */}
        <main className="min-w-0 space-y-8 pb-20">
           
           <TabsContent value="profile" className="m-0 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <Card className="border-stone-200/60 shadow-card">
                 <CardHeader className="pb-8 border-b border-stone-50">
                    <div className="flex items-center gap-3 mb-1">
                       <Building2 className="size-5 text-stone-400" />
                       <CardTitle className="text-2xl font-heading">Company Information</CardTitle>
                    </div>
                    <CardDescription className="text-[15px]">Update your organization&apos;s public details and identifiers.</CardDescription>
                 </CardHeader>
                 <CardContent className="pt-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                       <div className="space-y-2.5">
                          <Label htmlFor="company-name" className="text-[10px] font-bold uppercase tracking-[2px] text-stone-400 ml-1">Company Name</Label>
                          <Input id="company-name" defaultValue="Emley Technologies Ltd." className="h-12 px-5 bg-white border-stone-200 rounded-2xl shadow-inset-edge focus:ring-1 focus:ring-black transition-all font-medium text-stone-900" />
                       </div>
                       <div className="space-y-2.5">
                          <Label htmlFor="industry" className="text-[10px] font-bold uppercase tracking-[2px] text-stone-400 ml-1">Industry</Label>
                          <Input id="industry" defaultValue="IT Services & Distribution" className="h-12 px-5 bg-white border-stone-200 rounded-2xl shadow-inset-edge focus:ring-1 focus:ring-black transition-all font-medium text-stone-900" />
                       </div>
                       <div className="space-y-2.5">
                          <Label htmlFor="reg-no" className="text-[10px] font-bold uppercase tracking-[2px] text-stone-400 ml-1">Registration No.</Label>
                          <Input id="reg-no" defaultValue="RJSC-2019-18234" className="h-12 px-5 bg-white border-stone-200 rounded-2xl shadow-inset-edge focus:ring-1 focus:ring-black transition-all font-medium text-stone-900" />
                       </div>
                       <div className="space-y-2.5">
                          <Label htmlFor="tin" className="text-[10px] font-bold uppercase tracking-[2px] text-stone-400 ml-1">TIN Number</Label>
                          <Input id="tin" defaultValue="TIN-2029-8810" className="h-12 px-5 bg-white border-stone-200 rounded-2xl shadow-inset-edge focus:ring-1 focus:ring-black transition-all font-medium text-stone-900" />
                       </div>
                    </div>
                    <div className="space-y-2.5">
                       <Label htmlFor="address" className="text-[10px] font-bold uppercase tracking-[2px] text-stone-400 ml-1">Office Address</Label>
                       <Input id="address" defaultValue="House 12, Road 4, Gulshan-2, Dhaka-1212, Bangladesh" className="h-12 px-5 bg-white border-stone-200 rounded-2xl shadow-inset-edge focus:ring-1 focus:ring-black transition-all font-medium text-stone-900" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                       <div className="space-y-2.5">
                          <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[2px] text-stone-400 ml-1">Contact Email</Label>
                          <Input id="email" defaultValue="hr@emley.com.bd" className="h-12 px-5 bg-white border-stone-200 rounded-2xl shadow-inset-edge focus:ring-1 focus:ring-black transition-all font-medium text-stone-900" />
                       </div>
                       <div className="space-y-2.5">
                          <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-[2px] text-stone-400 ml-1">Phone</Label>
                          <Input id="phone" defaultValue="+880 1700-123456" className="h-12 px-5 bg-white border-stone-200 rounded-2xl shadow-inset-edge focus:ring-1 focus:ring-black transition-all font-medium text-stone-900" />
                       </div>
                    </div>
                 </CardContent>
              </Card>
           </TabsContent>

           <TabsContent value="notifications" className="m-0 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <Card className="border-stone-200/60 shadow-card">
                 <CardHeader className="pb-8 border-b border-stone-50">
                    <div className="flex items-center gap-3 mb-1">
                       <BellRing className="size-5 text-stone-400" />
                       <CardTitle className="text-2xl font-heading">Notifications & Alerts</CardTitle>
                    </div>
                    <CardDescription className="text-[15px]">Configure automated reminders and system alert preferences.</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-0 divide-y divide-stone-50 px-0 pt-2">
                    {NOTIFICATIONS.map((notif, idx) => (
                      <div key={idx} className="flex items-center justify-between py-7 px-10 hover:bg-stone-50/50 transition-colors group">
                         <div className="space-y-1.5 pr-10">
                            <p className="text-[15.5px] font-bold text-stone-900">{notif.title}</p>
                            <p className="text-[13.5px] text-muted-foreground/80 font-medium leading-relaxed">{notif.desc}</p>
                         </div>
                         <Switch defaultChecked={notif.enabled} className="data-[state=checked]:bg-black shadow-soft-elevation" />
                      </div>
                    ))}
                 </CardContent>
              </Card>
           </TabsContent>

           {/* Empty states for other tabs */}
           {['security', 'regional', 'data', 'billing'].map((v) => (
              <TabsContent key={v} value={v} className="mt-0 animate-in fade-in duration-500">
                 <Card className="flex flex-col items-center justify-center p-24 text-center border-stone-200/40 bg-stone-50/20 rounded-[32px]">
                    <div className="size-20 rounded-[28px] bg-white border border-stone-100 shadow-card flex items-center justify-center mb-8">
                       <Lock className="size-8 text-stone-300" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900">Module Under Update</h3>
                    <p className="text-muted-foreground font-medium max-w-sm mx-auto mt-3 leading-relaxed">
                       We&apos;re currently updating this configuration module to support advanced organization-level controls.
                    </p>
                    <Button variant="outline" className="mt-8 rounded-xl px-6 shadow-outline-ring font-bold text-xs uppercase tracking-widest h-10">
                       Learn more
                    </Button>
                 </Card>
              </TabsContent>
           ))}
        </main>
      </Tabs>
    </div>
  )
}

const SETTING_TABS = [
  { label: "Profile", value: "profile", icon: User },
  { label: "Notifications", value: "notifications", icon: Bell },
  { label: "Security", value: "security", icon: Shield },
  { label: "Regional", value: "regional", icon: Globe },
  { label: "Data Export", value: "data", icon: Database },
  { label: "Billing", value: "billing", icon: CreditCard },
]

const NOTIFICATIONS = [
  { title: "Payroll deadline reminders", desc: "Alert administrators 5 days before the scheduled disbursement date.", enabled: true },
  { title: "Leave request notifications", desc: "Notify relevant managers immediately when a new leave request is submitted.", enabled: true },
  { title: "Onboarding task reminders", desc: "Daily digest of pending onboarding tasks sent to the HR team.", enabled: true },
  { title: "Performance review alerts", desc: "Remind reviewers 7 days before the review cycle deadline.", enabled: false },
  { title: "New hire welcome emails", desc: "Automatically send a personalized welcome email on an employee's first day.", enabled: true },
]
