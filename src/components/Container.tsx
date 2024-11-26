import { cn } from "@/lib/utils"

interface CointainerProps extends React.ComponentProps<"div">{

}
const Container=({children,className,...props}: CointainerProps)=>{
    return (
        <div {...props} className={cn('max-w-5xl mx-auto px-5',className)}>
            {children}
        </div>
    )
}

export default Container;