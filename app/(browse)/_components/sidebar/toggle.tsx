"use client"

import { useSidebar } from "@/store/use-sidebar"
import { Button } from "@/components/ui/button";

import { ArrowLeftFromLineIcon } from "lucide-react";


export const Toggle = () => {

    const {
        collapsed,
        onExpand,
        onCollapse
    } = useSidebar((state) => state);

    const label = collapsed ? "Expand" : "Collapse";

    return (
        <>
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 flex items-center w-full">
                    <p className="font-semibold text-primary" >
                        for you
                    </p>
                    <Button
                        onClick={onCollapse}
                        className="h-auto p-2 ml-auto"
                        variant="ghost">
                        <ArrowLeftFromLineIcon className="h-4 w-4" />
                    </Button>
                </div >
            )}
        </>
    );
};