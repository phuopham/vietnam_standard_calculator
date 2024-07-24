import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/data')({
  component: Data,
})

function Data() {
  return <div className="p-2">Hello from Data!</div>
}