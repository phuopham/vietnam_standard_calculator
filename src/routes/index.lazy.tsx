import { AgeForm } from '@/components/age_form'
import { HeightForm } from '@/components/height_form'
import { IncomeForm } from '@/components/income_form'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
            <div>
                {/* main content */}
                <AgeForm />
                <HeightForm />
                <IncomeForm />
            </div>
        </div>
    )
}
