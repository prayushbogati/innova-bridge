import { verifyAuth } from "@/lib/auth"
import { getUsernameById } from "@/lib/user";
import HeaderClient from "./header-client"

export default async function Header() {
    const { user } = await verifyAuth()
    let username;
    if (user) {
        username = await getUsernameById(user.id)
    }
    else username = null;

    const plainUser = user
        ? {
            id: user.id.toString(),   // convert ObjectId → string
            username: user.username,
            email: user.email,
        }
        : null

    return <HeaderClient user={plainUser} username={username} />
}