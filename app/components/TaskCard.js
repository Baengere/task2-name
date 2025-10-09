'use client'
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs'

export default function TaskCard({ task }) {
  const { user } = useKindeAuth()

  async function handleDelete() {
    if (!confirm('Delete this task?')) return
    const res = await fetch(`/api/tasks/${task.id}`, { method: 'DELETE' })
    if (res.ok) location.reload()
    else alert('Failed to delete')
  }

  const isOwner = user && task.creator && user.id === task.creator.kindeId

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>{task.category || 'General'} • {task.difficulty || 'Medium'}</span>
        <span>${task.estimatedPrice ?? ''}</span>
      </div>
      {isOwner && <button onClick={handleDelete} className="text-red-600 text-sm mt-2">Delete</button>}
    </div>
  )
}
