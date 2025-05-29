import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, MapPin, Phone, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Electrical work background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Trusted Electrical Services in Los Angeles County
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Family-owned. Over 30 years of experience. Professional electrical services for residential and commercial
            clients.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="hover:cursor-pointer bg-[#FFD700] text-[#333333] hover:bg-[#e6c200]">
              Request a Free Quote
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:cursor-pointer border-white hover:bg-gray-200 text-black">
              Our Services
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-[#FFD700]" />
              <span>Available 24/7 for emergencies</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-[#FFD700]" />
              <span>Serving all of Los Angeles County</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-[#FFD700]" />
              <span>Call us: (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#333333] md:text-4xl">
              Los Angeles County&apos;s Most Trusted Electricians Since 1993
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              At W.F. Weng Electric, we&apos;ve built our reputation on reliability, quality workmanship, and exceptional
              customer service. As a family-owned business, we treat every client like they&apos;re part of our family.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-[#007BFF]">30+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-[#007BFF]">5,000+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-[#007BFF]">100%</div>
                <div className="text-sm text-gray-600">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#333333] md:text-4xl">
              Our Electrical Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From simple repairs to complex installations, our team of licensed electricians can handle all your
              electrical needs.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Residential Electrical Repairs"
              description="From outlet replacements to troubleshooting electrical issues, we keep your home safe and powered."
              icon="Home"
            />
            <ServiceCard
              title="Commercial Lighting"
              description="Energy-efficient lighting solutions for offices, retail spaces, and commercial properties."
              icon="Lightbulb"
            />
            <ServiceCard
              title="Panel Upgrades"
              description="Upgrade your electrical panel to safely handle your home&apos;s modern power demands."
              icon="LayoutGrid"
            />
            <ServiceCard
              title="EV Charger Installation"
              description="Professional installation of electric vehicle charging stations for your home or business."
              icon="Zap"
            />
            <ServiceCard
              title="Generator Installation"
              description="Keep your power on during outages with a professionally installed backup generator."
              icon="Power"
            />
            <ServiceCard
              title="Electrical Inspections"
              description="Comprehensive electrical inspections to ensure your property meets all safety codes."
              icon="CheckCircle"
            />
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#FFD700] text-[#333333] hover:bg-[#e6c200]">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 text-white md:py-24" style={{ backgroundColor: "#131A2A" }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Choose W.F. Weng Electric?</h2>
            <p className="mx-auto max-w-2xl text-lg text-blue-100">
              We&apos;re committed to providing the highest quality electrical services with your safety and satisfaction as
              our top priorities.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white/10 border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700] text-[#333333]">
                    1
                  </span>
                  Licensed & Insured
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Fully licensed and insured professionals who follow all electrical codes and safety standards.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700] text-[#333333]">
                    2
                  </span>
                  Experienced Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Our electricians have decades of combined experience in all types of electrical work.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700] text-[#333333]">
                    3
                  </span>
                  Upfront Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  No surprises or hidden fees. We provide detailed estimates before starting any work.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700] text-[#333333]">
                    4
                  </span>
                  Satisfaction Guaranteed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  We stand behind our work with warranties and a commitment to your complete satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#333333] md:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="W.F. Weng Electric installed a new panel in our home and did an amazing job. Professional, on time, and cleaned up perfectly after the job."
              author="Michael Johnson"
              location="Los Angeles"
              rating={5}
            />
            <TestimonialCard
              quote="I&apos;ve used them for both my home and business. Their team is knowledgeable, efficient, and always provides excellent service at fair prices."
              author="Sarah Williams"
              location="Boca Raton"
              rating={5}
            />
            <TestimonialCard
              quote="After a storm damaged our electrical system, W.F. Weng responded quickly and had us back up and running in no time. Highly recommend!"
              author="David Rodriguez"
              location="Jupiter"
              rating={5}
            />
          </div>
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <span className="text-lg font-medium text-gray-700">5.0 average from 150+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#333333] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-gray-300">
              Contact us today for a free, no-obligation quote on your electrical project.
            </p>
            <Button size="lg" className="bg-[#FFD700] text-[#333333] hover:bg-[#e6c200]">
              Request a Free Quote
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#333333] md:text-4xl">Contact Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Have questions or need a quote? Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Electrical Repairs</option>
                      <option value="commercial">Commercial Lighting</option>
                      <option value="panel">Panel Upgrades</option>
                      <option value="ev">EV Charger Installation</option>
                      <option value="generator">Generator Installation</option>
                      <option value="inspection">Electrical Inspection</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or electrical needs..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#007BFF] hover:bg-[#0056b3]">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold">Our Location</h3>
                <p className="text-gray-600">
                  123 Main Street
                  <br />
                  Los Angeles, CA 33401
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">Contact Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-[#007BFF]" />
                    (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5 text-[#007BFF]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    info@wfwengelectric.com
                  </p>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">Business Hours</h3>
                <div className="space-y-1 text-gray-600">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#007BFF]">24/7 Emergency Service Available</p>
                </div>
              </div>
              <div className="rounded-lg bg-[#007BFF]/10 p-4">
                <h3 className="mb-2 text-xl font-bold text-[#007BFF]">Service Area</h3>
                <p className="text-gray-600">
                  We proudly serve all of Los Angeles County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] py-12 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-8 w-8 text-[#FFD700]"
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
                <span className="text-xl font-bold">W.F. Weng Electric</span>
              </div>
              <p className="text-gray-400">
                Family-owned electrical contractor serving Los Angeles County for over 30 years.
              </p>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Residential Repairs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Commercial Lighting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Panel Upgrades
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    EV Charger Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Generator Installation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1 h-5 w-5 text-[#FFD700]" />
                  <span>
                    123 Main Street
                    <br />
                    Los Angeles, CA 90031
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-[#FFD700]" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-[#FFD700]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@wfwengelectric.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} W.F. Weng Electric. All rights reserved. CA License #ABC1234567
              </p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
