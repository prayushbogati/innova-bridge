'use server'

import { createUser, getUserByEmail } from '@/lib/user';
import { redirect } from 'next/navigation';
import { createAuthSession, destroySession } from '@/lib/auth';
import { hashUserPassword, verifyPassword } from '@/lib/hash';

export async function Signup(prevState, formData) {
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    const errors = {};

    // if (username.trim().length === 0) {
    //     errors.username = 'Username can\'t be empty!';
    // }
    // if (email.trim().length === 0) {
    //     errors.email = 'Email can\'t be empty!';
    // }
    // if (password.trim().length === 0) {
    //     errors.password = 'Password can\'t be empty!';
    // }

    if (username.trim().length === 0) {
        errors.username = 'Username can\'t be empty!';
    }

    if (!email.includes('@')) {
        errors.email = 'Invalid email!';
    }

    if (password.length < 8) {
        errors.password = 'Password must be min. 8 chars long!';
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors
        }
    }

    const hashedPassword = await hashUserPassword(password);

    try {
        const id = await createUser(username, email, hashedPassword);
        await createAuthSession(id);
    }
    catch (error) {
        return {
            errors: {
                email: error
            }
        }
    }
    redirect('/');

}

export async function Login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim().length === 0) {
        return {
            error: 'Email can\'t be empty!'
        }
    }
    if (password.trim().length === 0) {
        return {
            error: 'Password can\'t be empty!'
        }
    }

    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
        return {
            error: 'User does not exist!'
        }
    }

    const isCorrectPassword = await verifyPassword(password, existingUser.password);
    if (!isCorrectPassword) {
        return {
            error: 'Incorrect password!'
        }
    }

    console.log('About to create session for user:', existingUser._id)

    await createAuthSession(existingUser._id);
    redirect('/')
}

export async function logout() {
    await destroySession();

    redirect('/login');
}