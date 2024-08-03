import { OthersType } from "./pages/main"
import { SelectCustom } from "./ui/customSelect"

export const Other2Form = ({ data, onValueChange }: { data: OthersType, onValueChange: (val: OthersType) => void }) => {

    return (
        <>
            <SelectCustom description="Người khuyết tật?" onValueChange={(value) => onValueChange({ ...data, disability: value })} />
            <SelectCustom description="Mồ côi?" onValueChange={(value) => onValueChange({ ...data, orphans: value })} />
            <SelectCustom description="Hút thuốc?" onValueChange={(value) => onValueChange({ ...data, smoking: value })} />
            <SelectCustom description="Uống rượu bia**?" onValueChange={(value) => onValueChange({ ...data, alcoholic: value })} />
        </>
    )
}