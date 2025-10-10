'use client'

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs'
import TaskForm from '../../components/TaskForm'
import TaskFeed from '../../components/TaskFeed'


export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useKindeAuth()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading...
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-gray-700">
        <h2 className="text-xl font-semibold mb-4">Please log in to access the dashboard</h2>
        <a
          href={`${process.env.NEXT_PUBLIC_KINDE_SITE_URL || ''}/api/auth/login`}
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
            Login with Kinde
        </a>
      </div>
    )
  }

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome back, {user?.given_name || 'Creator'} 👋
      </h1>

      <div className="bg-white rounded-2xl shadow p-5">
        <TaskForm />
      </div>

      <div>
        <TaskFeed />
      </div>
    </main>
  )
}
