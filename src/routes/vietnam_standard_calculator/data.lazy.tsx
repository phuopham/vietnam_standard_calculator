import { DataPage } from '@/components/pages/data'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/vietnam_standard_calculator/data')({
  component: DataPage,
})
