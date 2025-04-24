import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"

interface AnnouncementCardProps {
  title: string
  category: string
  department: string
  date: string
  author: string
  content: string
  priority: "low" | "medium" | "high"
}

export function AnnouncementCard({
  title,
  category,
  department,
  date,
  author,
  content,
  priority,
}: AnnouncementCardProps) {
  const priorityColors = {
    low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  const categoryColors = {
    Academic: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Clubs: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Placements: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    Global: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  }

  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true })

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <span>{department}</span>
              <span>•</span>
              <span>{formattedDate}</span>
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge className={categoryColors[category as keyof typeof categoryColors]}>{category}</Badge>
            <Badge className={priorityColors[priority]}>{priority.charAt(0).toUpperCase() + priority.slice(1)}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <p className="text-xs text-muted-foreground">Posted by: {author}</p>
        <div className="flex gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
            Share
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
            Save
          </Badge>
        </div>
      </CardFooter>
    </Card>
  )
}

