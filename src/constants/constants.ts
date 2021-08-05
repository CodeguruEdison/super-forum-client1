import { Option } from "react-dropdown";
export const MOBIE_WIDTH = 768
export const catOptions: Array<string | Option> = [
    {
        value: "1",
        label: "Programming"
    },
    {
        value: "2",
        label: "Cooking"
    }
];

export const HOTKEYS: { [keyName: string]: string } = {
    "mod+b": "bold",
    "mod+i": "italic",
    "mod+u": "underline",
    "mod+`": "code",
};
export const initialValue = [
    {
        type: "paragraph",
        children: [{ text: "Enter your post here." }],
    },
];
export const LIST_TYPES = ["numbered-list", "bulleted-list"];
