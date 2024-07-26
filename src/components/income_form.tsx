import { Slider2 } from "./ui/slider2way"
import { cn } from "@/lib/utils"
import { matchedIncome } from "@/utils/standardpercentage"

export const IncomeForm = ({ income, onValueChange }: { income: number[], onValueChange: (val: number[]) => void }) => {
    return (
        <>
            <div>
                Thu nhập: Từ {income[0]} tới {income[1]} - {matchedIncome(income).toFixed(2)}% dân số
            </div>
            <Slider2
                defaultValue={[0, 50]}
                minStepsBetweenThumbs={1}
                max={50}
                min={0}
                step={5}
                onValueChange={(val) => onValueChange(val)}
                className={cn("w-full")}
            />

        </>

    )
}