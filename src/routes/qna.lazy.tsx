import { QnAPage } from '@/components/pages/qna'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/qna')({
  component: QnAPage
})