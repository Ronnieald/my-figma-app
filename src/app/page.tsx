"use client";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Conditional classes based on the dark mode state
  const containerBg = isDarkMode ? "bg-gray-900" : "bg-gray-100";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const textColor = isDarkMode ? "text-gray-100" : "text-gray-900";

  return (
    // Main container with full screen size and a transition for a smooth color change
    <div className={`flex items-center justify-center min-h-screen transition-colors duration-500 ${containerBg}`}>
      {/* Dark Mode Toggle Button positioned in the top right corner */}
      <button 
        onClick={toggleDarkMode} 
        className={`absolute top-6 right-6 p-2 rounded-full shadow-lg transition-colors duration-500 ${isDarkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"}`}
        aria-label="Toggle dark mode"
      >
        {/* SVG icon for a moon/dark mode indicator */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0015 2.25c5.385 0 9.75 4.365 9.75 9.75a9.753 9.753 0 01-3.748 12.752z" />
        </svg>
      </button>

      {/* Main card container with rounded corners, a shadow, and dynamic colors */}
      <div className={`text-center p-8 rounded-2xl shadow-2xl transition-colors duration-500 ${cardBg} ${textColor}`}>
        {/* "Welcome" title with a gradient and a different font style */}
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-serif">
          Welcome
        </h1>
        
        {/* Sign In / Sign Up buttons with gradients */}
        <div className="flex gap-4 justify-center mb-6">
          <Link href="/signin">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition shadow-lg">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Social login buttons with icons and gradients */}
        <div className="flex flex-col gap-3">
          {/* Google button with a placeholder link and SVG icon */}
          <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition shadow-lg flex items-center justify-center space-x-2">
              <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.5 20H24v8.5h11.8C34.3 35.5 30 39.5 24 39.5c-8.8 0-16-7.2-16-16s7.2-16 16-16c4.6 0 8.5 2 11.2 5.3l5.8-5.7C37.5 2.4 31.4 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24c13.3 0 24-10.7 24-24 0-1.6-.2-3.2-.5-4.7z" fill="#4285F4"/>
                <path d="M24 44.5c-4.6 0-8.5-2-11.2-5.3l-5.8 5.7C10.5 45.6 17.5 48 24 48c13.3 0 24-10.7 24-24 0-1.6-.2-3.2-.5-4.7z" fill="#34A853"/>
                <path d="M24 0C17.5 0 10.5 2.4 5.3 6.4L11.1 12.1C13.8 8.8 17.7 6.8 24 6.8c8.8 0 16 7.2 16 16s-7.2 16-16 16" fill="#FBBC05"/>
                <path d="M44.5 20H24V8.5H44.5v11.5z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </a>
          {/* Facebook button with a placeholder link and SVG icon */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-lg hover:from-blue-900 hover:to-blue-950 transition shadow-lg flex items-center justify-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15H7.5v-3h2.625v-2c0-2.618 1.59-4.045 3.96-4.045 1.144 0 2.115.085 2.396.124v2.753h-1.63c-1.282 0-1.533.61-1.533 1.503V12h3.067l-.4 3H14.5v6.854C20.125 22.954 24 17.99 24 12z"/>
              </svg>
              <span>Continue with Facebook</span>
            </button>
          </a>
          {/* GitHub button with a placeholder link and SVG icon */}
          <a href="https://github.com/login/oauth/authorize" target="_blank" rel="noopener noreferrer">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition shadow-lg flex items-center justify-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.374-12 12s5.374 12 12 12c5.303 0 9.803-3.435 11.396-8.236-.615-.12-1.077-.184-1.396-.184-4.225 0-7.684-2.822-8.995-6.793-.163-.48-.255-1.002-.255-1.565 0-2.758 2.242-5 5-5s5 2.242 5 5c0 .563-.092 1.085-.255 1.565-1.31 3.971-4.77 6.793-8.995 6.793-.319 0-.781.064-1.396.184C14.197 20.565 18.697 24 24 24c6.626 0 12-5.374 12-12s-5.374-12-12-12z"/>
              </svg>
              <span>Continue with GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
