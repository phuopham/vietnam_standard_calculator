import { Slider2 } from "./ui/slider2way"
import { cn } from "@/lib/utils"
import { matchedAge } from "@/utils/standardpercentage"
import { GenderType } from "./pages/main"

export const AgeForm = ({ gender, ages, onValueChange }: { gender?: GenderType, ages: number[], onValueChange: (newValue: number[]) => void }) => {
  return (
    <>
      <div>
        Tuổi tác: Từ {ages[0]} tới {ages[1]}{gender && " - " + matchedAge(gender, ages).toFixed(2) + "% dân số"}
      </div>
      <Slider2
        defaultValue={ages}
        minStepsBetweenThumbs={1}
        max={90}
        min={15}
        step={5}
        onValueChange={(newValues: number[]) => onValueChange(newValues)}
        className={cn("w-full")}
      />

    </>

  )
}