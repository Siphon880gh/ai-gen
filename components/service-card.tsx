import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  // Dynamically get the icon component from Lucide
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon

  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#007BFF]/10 text-[#007BFF]">
          {IconComponent && <IconComponent className="h-6 w-6" />}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
