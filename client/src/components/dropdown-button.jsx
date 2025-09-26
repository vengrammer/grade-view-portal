import { ChevronDownIcon,CalendarSearch } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropDownButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="pl-2">
          <CalendarSearch />
          <span className="">
            Batch
          </span>
          <ChevronDownIcon className="-me-1 opacity-60" size={16} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[12rem] min-w-(--radix-dropdown-menu-trigger-width) overflow-y-auto">
        <DropdownMenuItem>2025-2026</DropdownMenuItem>
        <DropdownMenuItem>2025-2026</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
