import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

interface Props {
    src: string,
    fallback: string
}
export function AvatarDemo({src, fallback}: Props) {
return (
    <Avatar>
        <AvatarImage src={src} alt="@shadcn" />
        <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
)
}
  