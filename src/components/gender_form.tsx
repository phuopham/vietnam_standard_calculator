import { GenderType } from "./pages/main";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export const GenderForm = ({ gender, setGender }: { gender: GenderType, setGender: (newValue: GenderType) => void }) => {
    return (
        <>
            <div>Bạn đang muốn tìm kiếm </div>
            <RadioGroup defaultValue={gender}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" onClick={() => setGender('male')} />
                    <Label htmlFor="male">Nam giới</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" onClick={() => setGender('female')} />
                    <Label htmlFor="female">Nữ giới</Label>
                </div>
            </RadioGroup>
        </>
    )
}