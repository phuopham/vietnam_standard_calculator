import { OthersType } from "./pages/main"
import { Toggle } from "./ui/toggle"
import { X } from 'lucide-react'

export const OtherForm = ({ data, onValueChange }: { data: OthersType, onValueChange: (val: OthersType) => void }) => {
    return (
        <div className="flex flex-wrap gap-3 items-center">
            <p>Tình trạng hôn nhân: </p>
            <Toggle id="currentlyMarried" defaultPressed={data.currentlyMarried} onClick={() => onValueChange({ ...data, currentlyMarried: !data.currentlyMarried })} >
                Đã kết hôn {data.currentlyMarried && <X className="m-1 w-4 h-4" />}
            </Toggle>
            <Toggle id="single" defaultPressed={data.single} onClick={() => onValueChange({ ...data, single: !data.single })}>
                Độc thân {data.single && <X className="m-1 w-4 h-4" />}
            </Toggle>
            <Toggle id="widowed" defaultPressed={data.widowed} onClick={() => onValueChange({ ...data, widowed: !data.widowed })} >
                Góa vợ/chồng {data.widowed && <X className="m-1 w-4 h-4" />}
            </Toggle>
            <Toggle id="divorced" defaultPressed={data.divorced} onClick={() => onValueChange({ ...data, divorced: !data.divorced })}>
                Đã bỏ vợ/chồng {data.divorced && <X className="m-1 w-4 h-4" />}
            </Toggle>
            <Toggle id="separated" defaultPressed={data.separated} onClick={() => onValueChange({ ...data, separated: !data.separated })} >
                Đang ly thân {data.separated && <X className="m-1 w-4 h-4" />}
            </Toggle>
        </div>
    )
}

