
import { Slider2 } from "./ui/slider2way"
import { cn } from "@/lib/utils"
import { matchedHeight } from "@/utils/standardpercentage"
import { GenderType } from "./pages/main"

export const HeightForm = ({ gender, height, onValueChange }: { gender: GenderType, height: number[], onValueChange: (val: number[]) => void }) => {
    return (
        <>
            <div>
                Chiều cao: Từ {height[0]} cm tới {height[1]} cm - {matchedHeight(gender, height[0], height[1]).toFixed(2)}% {gender == "male" ? "nam giới" : "nữ giới"} đạt tiêu chuẩn
            </div>
            <Slider2
                defaultValue={[140, 210]}
                minStepsBetweenThumbs={1}
                max={210}
                min={140}
                step={5}
                onValueChange={(val) => onValueChange(val)}
                className={cn("w-full")}
            />

        </>

    )
}