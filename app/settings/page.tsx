import * as React from "react"
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Database, 
  CreditCard,
  Save
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-light tracking-tight text-foreground">Settings</h2>
          <p className="mt-1.5 text-muted-foreground/80 font-medium">Manage your account preferences and system configurations.</p>
        </div>
        <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-warm-lift">
          <Save className="mr-2 size-4" /> Save Changes
        </Button>
      </div>

      {/* Settings Layout */}
      <Tabs defaultValue="profile" className="flex flex-col lg:flex-row gap-12">
        <TabsList className="flex lg:flex-col items-start lg:w-64 bg-transparent p-0 h-auto gap-2 overflow-x-auto lg:overflow-visible scrollbar-hide">
           {SETTING_TABS.map((tab) => (
             <TabsTrigger 
               key={tab.value} 
               value={tab.value} 
               className="w-full justify-start rounded-2xl px-5 py-3.5 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-stone-900 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-card transition-all"
             >
               <tab.icon className="mr-3 size-4.5" />
               {tab.label}
             </TabsTrigger>
           ))}
        </TabsList>

        <div className="flex-1 space-y-8">
           <TabsContent value="profile" className="m-0 space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <Card>
                 <CardHeader>
                    <CardTitle>Organization Profile</CardTitle>
                    <CardDescription>Public information about your company.</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <Label htmlFor="company-name" className="text-[11px] font-bold uppercase tracking-widest text-stone-500">Company Name</Label>
                          <Input id="company-name" defaultValue="Emley HRM Inc." className="h-11 rounded-xl shadow-inset-edge focus:ring-1 focus:ring-black" />
                       </div>
                       <div className="space-y-2">
                          <Label htmlFor="industry" className="text-[11px] font-bold uppercase tracking-widest text-stone-500">Industry</Label>
                          <Input id="industry" defaultValue="Technology / Software" className="h-11 rounded-xl shadow-inset-edge focus:ring-1 focus:ring-black" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="website" className="text-[11px] font-bold uppercase tracking-widest text-stone-500">Website</Label>
                       <Input id="website" defaultValue="https://emley-hrm.io" className="h-11 rounded-xl shadow-inset-edge focus:ring-1 focus:ring-black" />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="bio" className="text-[11px] font-bold uppercase tracking-widest text-stone-500">Description</Label>
                       <textarea id="bio" rows={4} className="w-full p-4 bg-background border border-border rounded-2xl text-sm shadow-inset-edge focus:ring-1 focus:ring-black outline-none transition-all resize-none">Next-generation human resource management platform focused on employee experience and automation.</textarea>
                    </div>
                 </CardContent>
              </Card>

              <Card>
                 <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-stone-500">Admin Email</Label>
                          <Input id="email" defaultValue="admin@emley-hrm.io" className="h-11 rounded-xl shadow-inset-edge" />
                       </div>
                       <div className="space-y-2">
                          <Label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-widest text-stone-500">Phone Number</Label>
                          <Input id="phone" defaultValue="+880 1234-567890" className="h-11 rounded-xl shadow-inset-edge" />
                       </div>
                    </div>
                 </CardContent>
              </Card>
           </TabsContent>

           <TabsContent value="notifications" className="m-0 animate-in fade-in slide-in-from-right-4 duration-500">
              <Card>
                 <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Choose how you want to be notified about organizational updates.</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-0">
                    {NOTIFICATIONS.map((notif, idx) => (
                      <div key={idx} className="flex items-center justify-between py-5 border-b border-border/40 last:border-0 group">
                         <div className="space-y-1">
                            <p className="text-[14.5px] font-semibold text-stone-800">{notif.title}</p>
                            <p className="text-[12px] text-muted-foreground font-medium">{notif.desc}</p>
                         </div>
                         <Switch defaultChecked={notif.enabled} className="data-[state=checked]:bg-black" />
                      </div>
                    ))}
                 </CardContent>
              </Card>
           </TabsContent>
        </div>
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
  { title: "Email Notifications", desc: "Receive summary reports and critical alerts via email.", enabled: true },
  { title: "Desktop Push", desc: "Get real-time browser notifications for payroll and leave requests.", enabled: true },
  { title: "Slack Integration", desc: "Send automated updates to your chosen Slack channels.", enabled: false },
  { title: "SMS Alerts", desc: "Urgent notifications sent directly to your phone.", enabled: false },
]
