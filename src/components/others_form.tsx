import { OthersType } from "./pages/main"
import { Toggle } from "./ui/toggle"
import { X } from 'lucide-react'

export const OtherForm = ({ data, onValueChange }: { data: OthersType, onValueChange: (val: OthersType) => void }) => {
    return (
        <div className="flex flex-wrap gap-3">
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
            <Toggle id="disability" defaultPressed={data.disability} onClick={() => onValueChange({ ...data, disability: !data.disability })} >
                Người khuyết tật {data.disability && <X className="m-1 w-4 h-4" />}
            </Toggle>
            <Toggle id="orphans" defaultPressed={data.orphans} onClick={() => onValueChange({ ...data, orphans: !data.orphans })}>
                Mồ côi {data.orphans && <X className="m-1 w-4 h-4" />}
            </Toggle>
            <Toggle id="antiAlcoholic" defaultPressed={data.antiAlcoholic} onClick={() => onValueChange({ ...data, antiAlcoholic: !data.antiAlcoholic })}>
                Không rượu bia {data.antiAlcoholic && <X className="m-1 w-4 h-4" />}
            </Toggle>
            <Toggle id="nonSmoking" defaultPressed={data.nonSmoking} onClick={() => onValueChange({ ...data, nonSmoking: !data.nonSmoking })}>
                Không hút thuốc {data.nonSmoking && <X className="m-1 w-4 h-4" />}
            </Toggle>
        </div>
    )
}

