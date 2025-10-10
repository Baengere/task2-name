'use client'

import { useState } from 'react'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      })

      if (!res.ok) throw new Error('Failed to create task')

      setTitle('')
      setDescription('')
      setSuccess('✅ Task created successfully!')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full space-y-4 mx-auto"
    >
      <h2 className="text-lg font-semibold text-gray-800">Create a Task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
      />

      <textarea
        placeholder="Describe the task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:ring-2 focus:ring-indigo-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 w-full font-medium"
      >
        {loading ? 'Creating...' : 'Create Task'}
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}
    </form>
  )
}
