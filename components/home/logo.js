import Image from "next/image"

export default function Logo({ logo, name }) {
    return (
        <div className="flex flex-col items-center md:flex-row">
            <Image height={50} width={50} src={logo} alt={name} />
            <h2 className="text-sm">{name}</h2>
        </div>
    )
}