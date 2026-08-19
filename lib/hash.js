import bcrypt from 'bcrypt';

export async function hashUserPassword(password) {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export async function verifyPassword(password, storedHash) {
    const isMatch = await bcrypt.compare(password, storedHash);
    return isMatch;
}