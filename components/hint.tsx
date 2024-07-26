import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Children } from "react";

interface Hintprops {
    label: string;
    children: React.ReactNode;
    asChild?: boolean;
    side?: "top" | "bottom" | "left | "right";
align ?: "start" | "center" | "end"; 
};

export const Hint = ({
    label,
    children,
    asChild,
    side,
    align,

}: HintProps) => {
    return (
        <TooltipProvider>

        </TooltipProvider>
    )
}