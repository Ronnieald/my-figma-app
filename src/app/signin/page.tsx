"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    // Updated: The main container now uses a two-column grid for better control.
    <div className="flex w-full min-h-screen">
      
      {/* Left Section: Form */}
      {/* Centered content with padding to prevent overlap */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center p-8 lg:p-12 relative">
        
        {/* Puzzlerman title and icon moved to top-left with absolute positioning */}
        <div className="absolute top-6 left-12 flex items-center space-x-2">
          <Link href="/">
            <Image src="/images/Puzzle_Icon.png" alt="App Logo" width={24} height={24} />
          </Link>
          <span className="text-xl font-semibold text-gray-800">Puzzlerman</span>
        </div>

        {/* Main Content Wrapper: This will hold the navigation and the form */}
        <div className="flex flex-col items-center justify-center">
          {/* Top Navigation */}
          <div className="flex justify-end items-start w-full max-w-lg mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <span className="hidden md:inline">No account yet?</span>
              <Link href="/signup">
                <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Form Container */}
          <div className="w-full max-w-sm flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Log In</h1>
            <p className="text-sm text-gray-500 uppercase mb-8">
              Please login to continue to your account
            </p>

            <form className="w-full space-y-6">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 shadow-sm placeholder-gray-400 text-gray-900"
              />

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 shadow-sm placeholder-gray-400 text-gray-900"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 text-sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* SVG for eye icon from heroicons for a clean, professional look */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.575 3.01 9.963 7.822.08.435.08.868 0 1.303-1.388 4.812-5.325 7.825-9.963 7.825-4.637 0-8.574-3.01-9.963-7.825z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>

              {/* Checkbox and Forgot Password */}
              <div className="flex justify-between items-center text-xs text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-600" />
                  <span className="text-sm">Remember me</span>
                </label>
                <Link href="#" className="underline hover:text-blue-600 transition-colors">
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold rounded-md py-3 hover:bg-blue-700 transition-colors shadow-lg"
              >
                Log In
              </button>
            </form>
            
            {/* Copyright Text */}
            <p className="mt-8 text-xs text-gray-500 text-center">
              © 2021-2025. All Rights Reserved. Q-Play
            </p>
          </div>
        </div>
      </div>
      
      {/* --------------------- */}
       {/*Esther's comment:(5) There is a background image in the design, kindly add it */}
      {/* Right Section: Visual Panel */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-tr from-[#89b3f3] to-[#4c75e2] text-white p-12 h-screen">
        <Image src="/images/Laptop_1.png" alt="Laptop illustration" width={500} height={500} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        
        {/* Quote Section at the bottom */}
        {/*Esther's comment: (6)
          the text is alligned to the center in the design.  */}
        <div className="relative z-10 mt-auto w-full">
          <p className="text-5xl font-serif text-white/50 mb-2">“</p>
          <p className="text-sm italic font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-xs mt-1 text-right font-semibold">- Author’s Name</p> 
          
          {/* Decorative Line */}
        </div>
      </div>
    </div>
  );
}
