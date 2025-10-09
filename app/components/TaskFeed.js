'use client'

import { useEffect, useState } from 'react'
import TaskCard from './TaskCard'

export default function TaskFeed() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('/api/tasks')
        if (!res.ok) throw new Error('Failed to load tasks')
        const data = await res.json()
        setTasks(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  if (loading) return <p className="text-center text-gray-600 mt-10">Loading tasks...</p>
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>
  if (tasks.length === 0) return <p className="text-center text-gray-600 mt-10">No tasks yet. Be the first to create one!</p>

  return (
    <div className="grid gap-4 mt-6">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
