import { Lucia } from "lucia";
import { cookies } from "next/headers";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { getDb } from "./mongodb";

let luciaInstance = null;

async function getLucia() {
    if (luciaInstance) return luciaInstance;

    const db = await getDb();
    const User = db.collection("users");
    const Session = db.collection("sessions");
    const adapter = new MongodbAdapter(Session, User);

    luciaInstance = new Lucia(adapter, {
        sessionCookie: {
            expires: false,
            attributes: {
                secure: process.env.NODE_ENV == 'production'
            }
        }
    });

    return luciaInstance;
}

export async function createAuthSession(userId) {
    const lucia = await getLucia();
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    const cookieStore = await cookies();
    cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}

export async function verifyAuth() {
    const lucia = await getLucia();
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(lucia.sessionCookieName);

    if (!sessionCookie) {
        return { user: null, session: null };
    }

    const sessionId = sessionCookie.value;
    if (!sessionId) {
        return { user: null, session: null };
    }

    const result = await lucia.validateSession(sessionId);

    try {
        if (result.session && result.session.fresh) {
            const freshSessionCookie = lucia.createSessionCookie(result.session.id);
            cookieStore.set(freshSessionCookie.name, freshSessionCookie.value, freshSessionCookie.attributes);
        }
        if (!result.session) {
            const blankSessionCookie = lucia.createBlankSessionCookie();
            cookieStore.set(blankSessionCookie.name, blankSessionCookie.value, blankSessionCookie.attributes);
        }
    }
    catch { }

    return result;
}

export async function destroySession() {
    const lucia = await getLucia();
    const { session } = await verifyAuth();

    if (!session) {
        return { error: 'Unauthorized!' };
    }

    await lucia.invalidateSession(session.id);

    const cookieStore = await cookies();
    const sessionCookie = lucia.createBlankSessionCookie();
    cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}