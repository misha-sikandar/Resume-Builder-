'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MdLogin } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white border-b border-white/20 sticky top-0 z-50" >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              @ProResume
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            
            <Link href="/tips" className="text-gray-600 hover:text-gray-900">
            Tips & Resources
            </Link>
            
            {/* Buttons displayed after "Contact" */}
            <Link href="/login"><Button variant="outline" className="ml-4" ><MdLogin />Login</Button></Link>
            <Link href="/signup"><Button variant="outline" className="ml-4"><HiOutlinePencilSquare />Signup</Button></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 items-center">
          <Link
            href="/"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
          >
            Home
          </Link>
         
          <Link
            href="/tips"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
          >
            Tips & Resources
          </Link>
          
          
          <div>
        <Link href="/login"><Button variant="outline" className="mx-1">Login</Button></Link>
        <Link href="/signup"><Button variant="outline" className="ml-4"><HiOutlinePencilSquare />Signup</Button></Link>
        </div>
        </div>
        
        <div className="md:hidden">
        <Sheet>
  <SheetTrigger>
          <svg className="w-6 h-6" fill="none" stroke="currentColour" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4-7 6h7"></path>
          </svg>
          </SheetTrigger>
          <SheetContent>
    <SheetHeader>
      <SheetTitle>MBlogs</SheetTitle>
      <SheetDescription>
         start your work from sheet
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
          
          <div/>
        </div>
      </div>

    </nav> 
  )
}
