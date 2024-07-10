"use client"
import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

interface WrapperProps {

    children: React.ReactNode;

};

export const Wrapper = ({
    children,
}: WrapperProps) => {
    const { collapsed } = useSidebar((state) => state);
    return (
        <aside
            className={cn
                ("fixed left-0 flex-col w-60 h-full bg-background border-lime-500 z-50 ",
                    collapsed && "[w-70px]"
                )}>
            {children}
        </aside >
    );
};

