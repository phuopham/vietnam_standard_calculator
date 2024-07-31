import { QnAPage } from '@/components/pages/qna'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/vietnam_standard_calculator/qna')({
  component: QnAPage
})