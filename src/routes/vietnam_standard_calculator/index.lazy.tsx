import { MainPage } from '@/components/pages/main'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/vietnam_standard_calculator/')({
  component: MainPage,
})