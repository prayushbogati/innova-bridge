import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Card({ image, title, desc }) {
    return (
        <div className="flex flex-col items-center gap-5 border border-gray-200 p-5 rounded-xl lg:w-1/4">
            <Image height={80} width={80} src={image} alt={title} />
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{desc}</p>
            <div className="flex text-indigo-700 text-sm items-center">
                <Link href={`#${title.trim()}`} className="pr-2 hover:underline">View Details</Link>
                <ArrowRight size={15}/>
            </div>
        </div>
    )
}