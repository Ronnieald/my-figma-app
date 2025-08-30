"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Helper function to check password strength (simple example)
const checkPasswordStrength = (password: string): string => {
  if (password.length < 6) return "Weak";
  if (password.length < 10) return "Medium";
  return "Strong";
};


// Component for the step-by-step progress sidebar on the right
const StepProgress = () => {
  // Define the steps for the sign-up process
  const steps = [
    { label: "STEP 1", description: "Lorem ipsum dolor sit amet, consectetur.", completed: true },
    { label: "STEP 2", description: "Lorem ipsum dolor sit amet, consectetur.", completed: false },
    { label: "STEP 3", description: "Lorem ipsum dolor sit amet, consectetur.", completed: false },
    { label: "STEP 4", description: "Lorem ipsum dolor sit amet, consectetur.", completed: false },
    { label: "FINAL STEP", description: "Lorem ipsum dolor sit amet, consectetur.", completed: false },
  ];

  return (
    <div className="flex flex-col space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center space-x-4">
          {/* Step Icon (checkmark or circle) */}
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step.completed ? 'bg-blue-600' : 'border-2 border-gray-400'
            }`}
          >
            {step.completed ? (
              // Checkmark SVG for completed steps
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            ) : (
              // Empty circle for incomplete steps
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            )}
          </div>
          {/* Step Text */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase text-gray-400">{step.label}</span>
            <span className="text-sm text-gray-200">{step.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};


export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const passwordStrength = checkPasswordStrength(password);

  return (
    // Updated: Both panels now use `min-h-screen` to ensure they stretch to the content height
    <div className="flex w-full min-h-screen">
      
      {/* Left Section: Form */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center p-8 lg:p-12 relative min-h-screen">

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
                <span className="hidden md:inline">Already a Member?</span>
                <Link href="/signin">
                  <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                    Log In
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Form Container */}
            <div className="w-full max-w-lg flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Start Your 14-Day Free Trial Today.
              </h1>
              <p className="text-sm text-gray-500 uppercase mb-8 text-center">
                No Credit Card Required!
              </p>
              
              <form className="w-full space-y-6">
                {/* First Name & Last Name (inline inputs) */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 shadow-sm placeholder-gray-400 text-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 shadow-sm placeholder-gray-400 text-gray-900"
                  />
                </div>
                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 shadow-sm placeholder-gray-400 text-gray-900"
                />
                {/* Password Input with Strength Indicator */}
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 shadow-sm placeholder-gray-400 text-gray-900"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase">
                    {/* Dynamically style the text based on strength */}
                    <span className={
                      passwordStrength === "Strong" ? "text-green-500" :
                      passwordStrength === "Medium" ? "text-yellow-500" :
                      "text-red-500"
                    }>
                      {passwordStrength}
                    </span>
                  </span>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold rounded-md py-3 hover:bg-blue-700 transition-colors shadow-lg mt-8"
                >
                  Next
                </button>
              </form>

              {/* Legal Disclaimer */}
              <p className="mt-8 text-xs text-gray-500 text-center max-w-sm">
                By Creating an Account, it means you agree to our{" "}
                <Link href="#" className="underline text-gray-700">Privacy Policy</Link> and{" "}
                <Link href="#" className="underline text-gray-700">Terms of Service</Link>.
              </p>

              {/* Copyright Text */}
              <p className="mt-4 text-xs text-gray-500 text-center">
                © 2021-2025. All Rights Reserved. Q-Play
              </p>
            </div>
        </div>
      </div>
      
      {/* Right Section: Visual Panel with Step Progress */}
      {/* Updated: This now also uses `min-h-screen` */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-tr from-[#1b2641] to-[#4a63e9] text-white p-12 min-h-screen">
        <div className="relative z-10 w-full">
          <StepProgress />
        </div>
      </div>
    </div>
  );
}
