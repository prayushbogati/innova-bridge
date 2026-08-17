import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

//         <div className="border border-gray-300 p-5 rounded-lg bg-white grid grid-rows-subgrid row-span-4">
//                 <div className="inline-block rounded-full p-2 bg-indigo-700 w-fit">
//                     <Icon color='white' />
//                 </div>
//                 <h1 className="font-bold mb-1">{name}</h1>
//                 <p className="text-sm">{desc}</p>
//                 <Link href={`#dynamic-route`} className="text-indigo-800 font-bold text-sm flex items-center gap-1 mt-3 hover:underline">Learn More <span><ArrowRight size={15}/></span></Link>
//         </div >

// ********** above div for aligning the rows of cards properly using sub-grid method as below one used simple min-h-[] to solve that (older and compatible way)*************

export default function ServiceCard({ name, desc, icon, img, slug }) {
    const Icon = icon;
    return (
        <div className="zoom border border-gray-300 rounded-lg bg-white">
            <div className="h-50 max-w-full relative">
                <Image src={img} fill className="object-cover rounded-t-lg" alt={`${name} image`} />
            </div>

            <div className="p-5 relative">
                <div className="inline-block rounded-full p-3 bg-indigo-700 absolute -top-8">
                    <Icon color='white' />
                </div>
                <h1 className="font-bold mb-1 min-h-12">{name}</h1>
                <p className="text-sm line-clamp-3">{desc}</p>
                <Link href={`/services/${slug}`} className="text-indigo-800 font-bold text-sm flex items-center gap-1 mt-3 hover:underline">Learn More <span><ArrowRight size={15} /></span></Link>
            </div >
        </div>
    )
}