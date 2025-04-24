import { PlusCircle, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RoleBasedActions() {
  // This is a mock component - in a real app, you would check the user's role
  // and conditionally render different actions
  const userRole = "admin" // This would come from auth context or API

  if (userRole === "student") {
    return null // Students don't see this section
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Admin Actions</CardTitle>
        <CardDescription>Manage announcements and settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button className="w-full justify-start" variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Announcement
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Manage Categories
        </Button>
        <Separator className="my-2" />
        <Button className="w-full">Dashboard</Button>
      </CardContent>
    </Card>
  )
}

