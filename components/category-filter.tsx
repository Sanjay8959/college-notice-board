"use client"

import { Check, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export function CategoryFilter() {
  const [departmentOpen, setDepartmentOpen] = useState(false)
  const [department, setDepartment] = useState("")

  const departments = [
    { label: "All Departments", value: "all" },
    { label: "Computer Science", value: "cs" },
    { label: "Electrical Engineering", value: "ee" },
    { label: "Mechanical Engineering", value: "me" },
    { label: "Civil Engineering", value: "ce" },
    { label: "Business Administration", value: "ba" },
  ]

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Filters</h3>
        <Separator />
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Department</h4>
        <Popover open={departmentOpen} onOpenChange={setDepartmentOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={departmentOpen} className="w-full justify-between">
              {department ? departments.find((dept) => dept.value === department)?.label : "Select department..."}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search department..." />
              <CommandList>
                <CommandEmpty>No department found.</CommandEmpty>
                <CommandGroup>
                  {departments.map((dept) => (
                    <CommandItem
                      key={dept.value}
                      value={dept.value}
                      onSelect={(currentValue) => {
                        setDepartment(currentValue === department ? "" : currentValue)
                        setDepartmentOpen(false)
                      }}
                    >
                      <Check className={`mr-2 h-4 w-4 ${department === dept.value ? "opacity-100" : "opacity-0"}`} />
                      {dept.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Priority</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="priority-high" />
            <label
              htmlFor="priority-high"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              High
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="priority-medium" />
            <label
              htmlFor="priority-medium"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Medium
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="priority-low" />
            <label
              htmlFor="priority-low"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Low
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Date Range</h4>
        <div className="grid gap-2">
          <Button variant="outline" className="w-full justify-start text-left font-normal">
            <span>From date</span>
          </Button>
          <Button variant="outline" className="w-full justify-start text-left font-normal">
            <span>To date</span>
          </Button>
        </div>
      </div>

      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}

