import BrandLogo from "./brand-logo"
import Link from "next/link"
import NavLink from "./navlink";

export default function Header() {
    const navLinks = ['home', 'about', 'training', 'why Innova?', 'services', 'contact']

    return (
        <div className="flex flex-col gap-5 py-5 md:flex-row items-center justify-between bg-indigo-950 text-white min-h-20 px-10 md:py-0 font-heading">
            <BrandLogo />
            <div>
                <ul className="flex flex-wrap flex-col items-center justify-center md:flex-row gap-5 py-5 md:gap-10 md:mx-10">
                    {navLinks.map(link => (
                        <li key={link} className="capitalize text-center"><NavLink href={link == 'home' ? '/' : `/${link}`}>{link}</NavLink></li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col md:flex-row gap-3 text-sm">
                <Link href='/login' className={`bg-indigo-950 rounded-md border border-gray-600 px-3 py-2 hover:bg-indigo-900 block`}>
                    Login
                </Link>

                <Link href='/register' className={`bg-indigo-700 rounded-md px-3 py-2 hover:bg-indigo-600 block`}>
                    Enroll Now
                </Link>
            </div>
        </div>
    )
}