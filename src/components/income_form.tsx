import { useState } from "react"
import { Slider2 } from "./ui/slider2way"
import { cn } from "@/lib/utils"
import { matchedIncome } from "@/utils/standardpercentage"

export const IncomeForm = () => {
    const [localValues, setLocalValues] = useState([0, 200])
    const handleValueChange = (newValues: number[]) => {
        setLocalValues(newValues)
    }
    return (
        <>
            <div>
                Thu nhập: Từ {localValues[0]} tới {localValues[1]} - {matchedIncome(localValues[0], localValues[1])}% dân số đô thị
            </div>
            <Slider2
                defaultValue={[0, 200]}
                minStepsBetweenThumbs={1}
                max={120}
                min={0}
                step={5}
                onValueChange={handleValueChange}
                className={cn("w-full")}
            />

        </>

    )
}