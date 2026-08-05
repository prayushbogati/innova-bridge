import { CircleCheck } from "lucide-react"

export default function List({iconSize, desc}){
    return(
        <li className="flex items-center gap-1"><CircleCheck size={iconSize} color="purple" /><span> {desc}</span></li>
    )
}