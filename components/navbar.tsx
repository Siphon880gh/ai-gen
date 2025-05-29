"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-8 w-8 text-[#007BFF]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 3a3 3 0 0 0-3 3m3-3a3 3 0 0 1 3 3m-3-3v10l-4-4m-9 6h6m6 0h-6m0 0V8" />
            </svg>
            <span className="text-xl font-bold text-[#333333]">W.F. Weng Electric</span>
          </Link>
        </div>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>

            {isMenuOpen && (
              <div className="absolute inset-x-0 top-16 z-50 bg-white p-4 shadow-lg">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#services"
                    className="text-base font-medium text-gray-700 hover:text-[#007BFF]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-base font-medium text-gray-700 hover:text-[#007BFF]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="#contact"
                    className="text-base font-medium text-gray-700 hover:text-[#007BFF]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button className="w-full bg-[#FFD700] text-[#333333] hover:bg-[#e6c200]">Get a Free Estimate</Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link href="#services" className="text-base font-medium text-gray-700 hover:text-[#007BFF]">
                Services
              </Link>
              <Link href="#testimonials" className="text-base font-medium text-gray-700 hover:text-[#007BFF]">
                Testimonials
              </Link>
              <Link href="#contact" className="text-base font-medium text-gray-700 hover:text-[#007BFF]">
                Contact
              </Link>
            </nav>
            <Button className="bg-[#FFD700] text-[#333333] hover:bg-[#e6c200]">Get a Free Estimate</Button>
          </div>
        )}
      </div>
    </header>
  )
}
