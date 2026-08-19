import { getDb } from "./mongodb"


export async function createUser(username, email, password) {
    const db = await getDb();
    const users = db.collection('users');

    const userExists = await users.findOne({ email });
    if (userExists) {
        throw new Error('User with this email already exists!');
    }

    const result = await users.insertOne(
        {
            username,
            email,
            password,
            createdAt: new Date()
        }
    )

    return result._id
}

export async function getUserByEmail(email) {
    const db = await getDb();
    const users = db.collection('users');

    const result = await users.findOne({ email });

    return result;

}

export async function getUsernameById(id) {
    const db = await getDb();
    const users = db.collection('users');

    const result = await users.findOne({ '_id': id });

    return result.username;

}