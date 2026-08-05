'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
    const path = usePathname();
    if (href === '/why Innova?') {
        href = '/why-innova'
    }
    const isActive = href === '/' ? path === '/' : path.startsWith(href);
    return (
        <Link href={href} className={`block transition-all duration-100 ease-in-out hover:scale-105 ${isActive ? 'text-indigo-700 font-bold' : 'text-white'}`}>{children}</Link>
    )
}