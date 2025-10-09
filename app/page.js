'use client'

import Link from 'next/link'
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs'

export default function HomePage() {
  const { isAuthenticated, isLoading } = useKindeAuth()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading...
      </div>
    )
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-center p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Flow of Work</h1>
      <p className="text-gray-600 max-w-lg mb-8">
        Connecting skilled people to real-world tasks using AI — 
        where every skill finds its opportunity.
      </p>

      {isAuthenticated ? (
        <Link
          href="/dashboard"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Go to Dashboard
        </Link>
      ) : (
        <a
          href="/api/auth/login"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Get Started
        </a>
      )}
    </main>
  )
}
