import { useState } from "react"
import { Slider2 } from "./ui/slider2way"
import { cn } from "@/lib/utils"
import { matchedAge } from "@/utils/standardpercentage"

export const AgeForm = () => {
  const [localValues, setLocalValues] = useState([0, 120])
  const handleValueChange = (newValues: number[]) => {
    setLocalValues(newValues)
  }
  return (
    <>
      <div>
        Tuổi tác: Từ {localValues[0]} tới {localValues[1]} - {matchedAge("male", localValues[0], localValues[1]).toFixed(2)}% dân số
      </div>
      <Slider2
        defaultValue={[0, 120]}
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