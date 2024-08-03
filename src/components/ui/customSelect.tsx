
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

export const SelectCustom = ({ description, onValueChange }: { description: string, onValueChange: (val: boolean | undefined) => void }) => {

    const onDisabilityChange = (value: "true" | "false" | "undefined") => {
        switch (value) {
            case "true": onValueChange(true)
                break
            case "false": onValueChange(false)
                break
            case "undefined": onValueChange(undefined)
                break
        }
    }

    return (
        <div className="flex items-center justify-between">
            <p>
                {description}
            </p>
            <Select onValueChange={onDisabilityChange}>
                <SelectTrigger className="w-fit" >
                    <SelectValue placeholder="Có bao gồm" />
                </SelectTrigger>
                <SelectContent >
                    <SelectItem value="true">Chỉ tính riêng</SelectItem>
                    <SelectItem value="false">Không bao gồm</SelectItem>
                    <SelectItem value="undefined">Có bao gồm</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}