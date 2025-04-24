import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnnouncementCard } from "@/components/announcement-card"
import { CategoryFilter } from "@/components/category-filter"
import { RoleBasedActions } from "@/components/role-based-actions"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Campus Bulletin</span>
            </Link>
          </div>
          <div className="relative w-full max-w-sm px-4">
            <Search className="absolute left-6 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search announcements..." className="w-full pl-10" />
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/subscriptions" className="text-sm font-medium text-muted-foreground">
              Subscriptions
            </Link>
            <Link href="/profile" className="text-sm font-medium text-muted-foreground">
              Profile
            </Link>
            <Button variant="default" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <div className="space-y-4 sticky top-20">
              <CategoryFilter />
              <RoleBasedActions />
            </div>
          </div>
          <div className="md:w-3/4 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
              <Button>Refresh</Button>
            </div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="clubs">Clubs</TabsTrigger>
                <TabsTrigger value="placements">Placements</TabsTrigger>
                <TabsTrigger value="global">Global</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 mt-6">
                <AnnouncementCard
                  title="End Semester Examination Schedule"
                  category="Academic"
                  department="All Departments"
                  date="2023-11-15"
                  author="Examination Controller"
                  content="The end semester examinations for all courses will commence from December 1, 2023. The detailed schedule is now available on the examination portal. Students are advised to check their respective timetables and prepare accordingly."
                  priority="high"
                />
                <AnnouncementCard
                  title="Annual Tech Fest Registration Open"
                  category="Clubs"
                  department="Computer Science"
                  date="2023-11-14"
                  author="Tech Club President"
                  content="Registration for the Annual Tech Fest 'Innovate 2023' is now open. The event will be held from December 10-12, 2023. Various competitions, workshops, and guest lectures have been planned. Register before November 25 to avail early bird discounts."
                  priority="medium"
                />
                <AnnouncementCard
                  title="Campus Recruitment Drive by TechCorp"
                  category="Placements"
                  department="Engineering"
                  date="2023-11-13"
                  author="Placement Officer"
                  content="TechCorp will be conducting a campus recruitment drive for B.Tech and M.Tech students on November 20, 2023. Eligible students must register on the placement portal by November 18. The package offered is 12 LPA for B.Tech and 15 LPA for M.Tech graduates."
                  priority="high"
                />
                <AnnouncementCard
                  title="Library Timings Extended During Exams"
                  category="Global"
                  department="Administration"
                  date="2023-11-12"
                  author="Chief Librarian"
                  content="The central library will remain open from 8 AM to 12 AM during the examination period (December 1-20, 2023). Students are encouraged to utilize this extended facility for their exam preparations."
                  priority="low"
                />
                <AnnouncementCard
                  title="Workshop on Research Methodology"
                  category="Academic"
                  department="Research Cell"
                  date="2023-11-10"
                  author="Research Coordinator"
                  content="A two-day workshop on 'Research Methodology and Paper Writing' will be conducted on November 25-26, 2023. The workshop is mandatory for all Ph.D. scholars and optional for M.Tech students. Registration is open until November 20."
                  priority="medium"
                />
              </TabsContent>
              <TabsContent value="academic" className="space-y-4 mt-6">
                <AnnouncementCard
                  title="End Semester Examination Schedule"
                  category="Academic"
                  department="All Departments"
                  date="2023-11-15"
                  author="Examination Controller"
                  content="The end semester examinations for all courses will commence from December 1, 2023. The detailed schedule is now available on the examination portal. Students are advised to check their respective timetables and prepare accordingly."
                  priority="high"
                />
                <AnnouncementCard
                  title="Workshop on Research Methodology"
                  category="Academic"
                  department="Research Cell"
                  date="2023-11-10"
                  author="Research Coordinator"
                  content="A two-day workshop on 'Research Methodology and Paper Writing' will be conducted on November 25-26, 2023. The workshop is mandatory for all Ph.D. scholars and optional for M.Tech students. Registration is open until November 20."
                  priority="medium"
                />
              </TabsContent>
              <TabsContent value="clubs" className="space-y-4 mt-6">
                <AnnouncementCard
                  title="Annual Tech Fest Registration Open"
                  category="Clubs"
                  department="Computer Science"
                  date="2023-11-14"
                  author="Tech Club President"
                  content="Registration for the Annual Tech Fest 'Innovate 2023' is now open. The event will be held from December 10-12, 2023. Various competitions, workshops, and guest lectures have been planned. Register before November 25 to avail early bird discounts."
                  priority="medium"
                />
              </TabsContent>
              <TabsContent value="placements" className="space-y-4 mt-6">
                <AnnouncementCard
                  title="Campus Recruitment Drive by TechCorp"
                  category="Placements"
                  department="Engineering"
                  date="2023-11-13"
                  author="Placement Officer"
                  content="TechCorp will be conducting a campus recruitment drive for B.Tech and M.Tech students on November 20, 2023. Eligible students must register on the placement portal by November 18. The package offered is 12 LPA for B.Tech and 15 LPA for M.Tech graduates."
                  priority="high"
                />
              </TabsContent>
              <TabsContent value="global" className="space-y-4 mt-6">
                <AnnouncementCard
                  title="Library Timings Extended During Exams"
                  category="Global"
                  department="Administration"
                  date="2023-11-12"
                  author="Chief Librarian"
                  content="The central library will remain open from 8 AM to 12 AM during the examination period (December 1-20, 2023). Students are encouraged to utilize this extended facility for their exam preparations."
                  priority="low"
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Campus Bulletin. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

