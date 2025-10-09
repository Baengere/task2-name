"use client";

import Link from "next/link";
import { LoginLink, LogoutLink, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function Navbar() {
  const { isAuthenticated, user } = useKindeAuth();

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
          Flow<span className="text-gray-800">Work</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="/tasks" className="hover:text-indigo-600 transition-colors">Tasks</Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">About</Link>
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <img
                src={user?.picture || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <span className="text-gray-700 text-sm font-medium hidden sm:inline">
                {user?.given_name || user?.email}
              </span>
              <LogoutLink className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition-colors">
                Logout
              </LogoutLink>
            </>
          ) : (
            <LoginLink className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
              Login
            </LoginLink>
          )}
        </div>
      </div>
    </nav>
  );
}
