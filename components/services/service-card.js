import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ name, desc, icon }) {
    const Icon = icon;
    return (
        <div className="border border-gray-300 p-5 rounded-lg bg-white">
            <div className="max-h-1/2">
                <img alt="service image" />
            </div>
            <div className="max-h-1/2">
                <div className="inline-block rounded-full p-2 bg-indigo-700">
                    <Icon color='white' />
                </div>
                <h1 className="font-bold mb-1 min-h-12">{name}</h1>
                <p className="text-sm">{desc}</p>
                <Link href={`#dynamic-route`} className="text-indigo-800 font-bold text-sm flex items-center gap-1 mt-3 hover:underline">Learn More <span><ArrowRight size={15}/></span></Link>
            </div>
        </div >
    )
}