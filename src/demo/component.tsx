
import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@components/ui/select"
import { Input } from "@components/ui/input"
import { Checkbox } from "@components/ui/checkbox"
import { ComboBox } from "@components/ui/combobox"


export const DemoComponent = () => {
    return (
        <div className="p-2">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <SelectDemo />
                </div>

                <div className="mb-12">
                    <InputDemo />
                </div >

                <div className="mb-12">
                    <CheckboxDemo />
                </div>
                <div className="mb-12">
                    <ComboBoxDemo />
                </div>

            </div>
        </div>
    )
}


function SelectDemo() {
    return (
        <div>
            <div >
                <div className="ml-1 mb-2 text-sm text-muted-foreground font-semibold">Select component</div>
            </div>
            <Select >
                <SelectTrigger >
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent  >
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

function InputDemo() {
    return (
        <div>
            <div >
                <div className="ml-1 mb-2 text-sm text-muted-foreground font-semibold">Input component</div>
            </div>
            <Input placeholder="Enter text" />
        </div>
    )
}



function CheckboxDemo() {
    return (
        <div>


            <div >
                <div className="ml-1 mb-2 text-sm text-muted-foreground font-semibold">Checkbox</div>
            </div>

            <div className="mb-1 flex items-center">
                <Checkbox className="mr-2" id="checkbox-demo" />
                <label className="text-sm text-muted-foreground select-none" htmlFor="checkbox-demo">Click to Disable</label>
            </div>

            {/* <div className="mb-2 text-sm text-muted-foreground">This is a checkbox component</div> */}
        </div>
    )
}

function ComboBoxDemo() {
    return (
        <div>
            <ComboBox
                options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                    { label: "Option 3", value: "option3" },
                ]}
                placeholder="Select an option"
                onChange={(value) => console.log("Selected:", value)}
            />
        </div>
    )

}