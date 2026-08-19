'use client'

import { useState } from "react";
import BrandLogo from "./brand-logo";
import NavLink from "./navlink";
import Button from "./button";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { logout } from "@/actions/auth-action";

export default function HeaderClient({ user, username }) {
    const router = useRouter();
    const navLinks = ['home', 'about', 'training', 'why Innova?', 'services', 'contact']
    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleLogin = () => {
        router.replace('/login');
    }

    const handleRegister = () => {
        router.replace('/register');
    }

    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <div className={`bg-indigo-950 text-white flex flex-col gap-2 py-5 lg:flex-row items-center justify-between min-h-20 px-10 relative ${!isNavOpen ? 'flex max-md:flex-row md:flex-col items-center justify-between' : null}`}>
            <BrandLogo />
            <Menu className={`hidden ${!isNavOpen ? 'max-md:block' : null}`} onClick={toggleMenu} />
            <X size={30} className={`absolute right-3 top-0 m-6 hidden ${isNavOpen ? 'max-md:block' : null}`} onClick={toggleMenu} />
            <div className={`${isNavOpen ? 'max-md:block' : 'max-md:hidden'}`}>
                <ul className="flex flex-col items-center justify-center md:flex-row gap-5 py-5 md:gap-10 md:mx-10">
                    {navLinks.map(link => (
                        <li key={link} className="capitalize text-center"><NavLink href={link == 'home' ? '/' : `/${link}`}>{link}</NavLink></li>
                    ))}
                </ul>
            </div>

            {user ? (

                <form action={logout} className={`${isNavOpen ? 'max-md:block' : 'max-md:hidden'}`}>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                        <h2 className="font-bold">{username}</h2>
                        <Button padding='px-3 py-2' type='submit'>Logout</Button>
                    </div>
                </form>
            ) : (
                <div className={`flex flex-col md:flex-row gap-3 text-sm ${isNavOpen ? 'max-md:flex-col' : 'max-md:hidden'}`}>
                    <Button padding='px-3 py-2' color='bg-indigo-950' hover='bg-indigo-900' border='border border-gray-600' onClick={handleLogin}>Login</Button>
                    <Button padding='px-3 py-2' onClick={handleRegister}>Enroll Now</Button>
                </div>
            )}
        </div>
    )
}