import BrandLogo from "./brand-logo"
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import NavLink from "./navlink";
import NewsLetterForm from "./newsletter-form";
import SocialIcons from "./social-icons";
import Link from "next/link";

export default function Footer() {
    const socialIcons = [
        { name: 'facebook', icon: <FaFacebook size={24} />, href: 'https://www.facebook.com' },
        { name: 'linkedin', icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com' },
        { name: 'instagram', icon: <FaInstagram size={24} />, href: 'https://www.instagram.com' },
    ]

    const date = new Date();
    const year = date.getFullYear();

    const quickLinks = ['about', 'training', 'why Innova?', 'services', 'contact'];

    const popularTrainings = ['Red Hat Linux', 'AWS Cloud', 'Docker & Kubernetes', 'CCNA Networking', 'Terraform'];

    const support = ['FAQ', 'Student Support', 'Payment & Refund', 'Terms & Conditions', 'Privacy Policy'];

    return (
        <div className="bg-indigo-950 text-sm text-white py-5 px-10 font-heading">
            <div className="mx-auto max-w-5xl flex flex-col md:flex-row gap-10 md:justify-between">

                {/* about section */}
                <div className="flex flex-col gap-5 max-sm:items-center max-sm:text-center md:w-1/5">
                    <BrandLogo />
                    <p className="leading-6">Empowering learners with in-demand skills through industry-focused trainings and hands-on labs.</p>
                    <div className="flex gap-5">
                        {socialIcons.map(social => (
                            <Link key={social.name} href={social.href} target="_blank">
                                <SocialIcons icon={social.icon} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                    {/* quick links section */}
                    <div className="flex flex-col max-sm:items-center max-sm:text-center">
                        <h1 className="font-bold mb-3">Quick Links</h1>
                        <ul className="flex flex-col gap-2">
                            {quickLinks.map(link => (
                                <li key={link} className="capitalize"><NavLink href={`/${link}`}>{link}</NavLink></li>
                            ))}
                        </ul>
                    </div>

                    {/* popular trainings */}
                    <div className="flex flex-col max-sm:items-center max-sm:text-center">
                        <h1 className="font-bold mb-3">Popular Trainings</h1>
                        <ul className="flex flex-col gap-2">
                            {popularTrainings.map(link => (
                                <li key={link} className="capitalize">{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* support */}
                    <div className="flex flex-col max-sm:items-center max-sm:text-center">
                        <h1 className="font-bold mb-3">Support</h1>
                        <ul className="flex flex-col gap-2">
                            {support.map(link => (
                                <li key={link} className="capitalize">{link}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* newsletter */}
                <div className="md:w-1/5 flex flex-col max-sm:items-center max-sm:text-center">
                    <h1 className="font-bold mb-3">Newsletter</h1>
                    <p className="mb-2">Subscribe to get updates on new trainings and offers.</p>

                    {/* newsletter form */}
                    <NewsLetterForm />
                </div>

            </div>

            <p className="text-center border-t border-gray-600 max-w-5xl mx-auto mt-5 pt-2">© {year} Innova Bridge Pvt. Ltd. All Rights Reserved.</p>
        </div>
    )
}