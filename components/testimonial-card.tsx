import { Star } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
}

export default function TestimonialCard({ quote, author, location, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-[#FFD700] text-[#FFD700]" : "text-gray-300"}`} />
          ))}
        </div>
        <blockquote className="mb-4 border-l-4 border-[#007BFF] pl-4 italic text-gray-700">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 p-6">
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-gray-500">{location}</div>
        </div>
      </CardFooter>
    </Card>
  )
}
