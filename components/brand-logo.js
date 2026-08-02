import Link from "next/link";
// import { Camera } from 'lucide-react';

export default function BrandLogo() {
    return (
        <Link href='/' className="flex items-center gap-2">
            {/* <Camera size={24}/> */}
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold tracking-wider">INNOVA</h1>
                <h2 className="text-md text-right tracking-widest leading-2">BRIDGE</h2>
            </div>
        </Link>
    )
}