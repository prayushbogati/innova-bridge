import Link from "next/link";

export default function Button({ href, color, bg, children, border }) {
    return (
        <div>
            <Link href='/login' className={`bg-${bg}-950 text-${color}-950 rounded-md border border-${border}-600 px-3 py-2 hover:bg-${bg}-600 block`}>
                {children}
            </Link>
        </div>
    )
}