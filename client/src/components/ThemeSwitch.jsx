import React from "react"
import { useId } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import { useTheme } from "./ThemeProvider" // 👈 your custom theme context

export function ThemeSwitch() {
  const id = useId()
  const { theme, setTheme } = useTheme()

  // checked = dark mode enabled
  const checked = theme === "dark"

  return (
    <div>
      <div
        className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        
        {/* Switch */}
        <Switch
          id={id}
          checked={checked}
          onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
          className="peer data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto 
          [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 
          [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full 
          [&_span]:data-[state=checked]:rtl:-translate-x-full" 
        />

        {/* Moon icon (active in dark mode) */}
        <span
          className="peer-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative ms-0.5 
          flex min-w-8 items-center justify-center text-center">
          <MoonIcon size={16} aria-hidden="true" />
        </span>

        {/* Sun icon (active in light mode) */}
        <span
          className="peer-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative me-0.5 
          flex min-w-8 items-center justify-center text-center">
          <SunIcon size={16} aria-hidden="true" />
        </span>
      </div>

      {/* Accessible label */}
      <Label htmlFor={id} className="sr-only">
        Toggle dark mode
      </Label>
    </div>
  )
}
