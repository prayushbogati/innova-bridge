import Image from "next/image"

export default function Card({ logo, name, desc, tutor, orgPrice, price, disc }) {
    return (
        <div className="p-5 border border-gray-200 rounded-lg flex flex-col bg-white">
            <div className="h-20 w-20 shrink-0 relative">
                <Image src={logo} alt={`${name} logo`} sizes="10" fill className="object-contain" />
            </div>
            <h1 className="font-bold pt-2">{name}</h1>
            <p className="min-h-18">{desc}</p>
            <p className="text-sm">{tutor}</p>
            <div className="flex justify-between items-center font-bold text-sm pt-3">
                <p className="text-red-600 line-through">{`Rs. ${orgPrice}`}</p>
                <div className="flex items-center gap-5 min-w-0 max-w-full">
                    <p className="text-green-600">{`Rs. ${price}`}</p>
                    <p className="text-red-600 border border-red-800 rounded-lg p-1">{disc}</p>
                </div>
            </div>
        </div>
    )
}