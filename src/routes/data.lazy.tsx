import { DataPage } from '@/components/pages/data'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/data')({
  component: DataPage,
})
