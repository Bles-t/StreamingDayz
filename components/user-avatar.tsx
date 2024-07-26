import { cva, type VariantProps } from "class-variance-authority"


import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

const avatarSizes = cva(
    "",
    {
        variants: {
            size: {
                default: "h-8 w-8",
                lg: "h-14 w-14 "
            },
        },
        defaultVariants: {
            size: "default"
        }
    }
)


interface UserAvatarProps
    extends VariantProps<typeof avatarSizes> {
    username: string;
    imageUrl: string;
    isLive?: boolean;
    showBadge?: boolean;
};

export const UserAvatar = ({
    username,
    imageUrl,
    isLive,
    showBadge,
    size,
}: UserAvatarProps) => {
    const canShowBadge = showBadge && isLive;

    return (
        <div className="realtive">
            <Avatar
                className={cn(
                    isLive && "ring-2 ring-green-500 border border-background"
                )}
            >
                <AvatarImage src={imageUrl} className="object-cover" />
            </Avatar>
        </div>

    );
};