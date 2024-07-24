import { useState } from "react"
import { Slider2 } from "./ui/slider2way"
import { cn } from "@/lib/utils"
import { matchedHeight } from "@/utils/standardpercentage"

export const HeightForm = () => {
    const gender = "male"
    const [localValues, setLocalValues] = useState([0, 210])
    const handleValueChange = (newValues: number[]) => {
        setLocalValues(newValues)
    }
    return (
        <>
            <div>
                Chiều cao: Từ {localValues[0]} cm tới {localValues[1]} cm - {matchedHeight(gender, localValues[0], localValues[1]).toFixed(2)}% {gender == "male" ? "nam giới" : "nữ giới"} đạt tiêu chuẩn
            </div>
            <Slider2
                defaultValue={[140, 210]}
                minStepsBetweenThumbs={1}
                max={210}
                min={140}
                step={5}
                onValueChange={handleValueChange}
                className={cn("w-full")}
            />

        </>

    )
}