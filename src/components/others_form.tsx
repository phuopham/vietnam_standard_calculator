import { OthersType } from "./pages/main"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

export const OtherForm = ({ data, onValueChange }: { data: OthersType, onValueChange: (val: OthersType) => void }) => {
    return (
        <div>
            <div>
                <Checkbox id="disability" checked={data.disability} onClick={() => onValueChange({ disability: !data.disability, orphans: data.orphans })} />
                <Label htmlFor="disability">
                    Người khuyết tật
                </Label>
            </div>
            <div>
                <Checkbox id="orphans" checked={data.orphans} onClick={() => onValueChange({ disability: data.disability, orphans: !data.orphans })} />
                <Label htmlFor="orphans">
                    Mồ côi
                </Label>
            </div>
        </div>
    )
}