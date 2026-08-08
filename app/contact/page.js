import { ShieldQuestionMark, MessageCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/contact/contact-form"
import ContactIconCard from "@/components/contact/contact-icon-card"
import { cardsContact } from "@/lib/cards"

export default function ContactPage() {
    const cards = cardsContact;
    return (
        <>
            <div className="bg-indigo-950 text-white px-10 lg:px-40 py-10">
                <div className="max-lg:text-center lg:max-w-1/2">
                    <p className="text-indigo-600 text-sm font-bold">CONTACT US</p>
                    <h1 className="text-3xl font-bold my-3">We're Here to Help You <br /><span className="text-indigo-600"> Start Your Learning Journey</span></h1>
                    <p>Have questions about our trainings, labs or programs? Our team is ready to assist you.</p>
                </div>
            </div>
            <div className="px-10 lg:px-40 mb-20">

                {/* main content with form */}
                <div className="flex flex-col lg:flex-row my-10 gap-10 lg:gap-20">
                    {/* left-side */}
                    <div className="lg:max-w-3/10 max-lg:text-center">
                        <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                        <p>Reach out to us through any of these channels</p>

                        <div className="py-3">
                            {/* cards.. */}
                            {cards.map(card => (
                                <ContactIconCard key={card.title} icon={card.icon} title={card.title} desc={card.desc} />
                            ))}
                        </div>
                    </div>
                    {/* right-side */}
                    <div className="lg:border-l border-gray-200 lg:pl-15 flex flex-col max-lg:items-center lg:max-w-7/10">
                        <h3 className="text-2xl font-bold mb-2 max-lg:text-center">Send Us a Message</h3>
                        <p className="max-lg:text-center">Fill the form below and we'll get back to you as soon as possible.</p>

                        <div className="my-5">
                            {/* contact form */}
                            <ContactForm />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 max-w-full text-sm">

                    <div className="flex flex-col items-center lg:flex-row lg:max-w-1/2 gap-5 border border-gray-200 rounded-xl p-2">
                        <div className="flex items-center gap-2">
                            <ShieldQuestionMark size={80} color="blue" />
                            <div>
                                <h3 className="text-xl font-bold text-indigo-700">Need Quick Help?</h3>
                                <p>Chat with our team for immediate assistance.</p>
                            </div>
                        </div>
                        {/* flex items-center text-sm border border-indigo-700 text-indigo-700 transition-all duration-200 ease-in-out hover:font-bold rounded-sm py-2 px-3 */}

                        <button className="flex border border-indigo-700 rounded-md p-2 transition-all duration-200 ease-in-out hover:scale-102 items-center"><span className="text-indigo-700">Start Live Chat </span><MessageCircle className="text-indigo-700" /></button>
                    </div>

                    <div className="relative h-full lg:w-1/2 border border-gray-200 rounded-xl px-2">

                        {/* map iframe */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28269.09542317642!2d85.32935740009506!3d27.666702729930424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f95ee58aff%3A0x18c88ee802315e15!2sKathmandu%20Valley!5e0!3m2!1sen!2snp!4v1785689594130!5m2!1sen!2snp" style={{ border: 3 }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className="w-full h-full">
                        </iframe>

                        <div className="md:absolute top-0 right-0 bg-white p-2 m-3 rounded-md">
                            <h3 className="font-bold">Find Us Here</h3>
                            <p className="py-1">Kupondole, Lalitpur, Nepal</p>
                            <Link href='#maps' className="flex items-center gap-2 text-blue-700 font-bold"><span>View on Google Maps</span> <ExternalLink size={15} /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}