'use server'

import { Resend } from 'resend';

function validate(text) {
    return (
        !text || text.trim().length === 0
    )
}

export async function handleFormData(prevState, formData) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const userDetails = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    }

    if (
        validate(userDetails.name) ||
        validate(userDetails.email) || !userDetails.email.includes('@') ||
        // validate(userDetails.phone) || ------> as not mandatory
        (userDetails.phone && userDetails.phone.length !== 10) ||
        validate(userDetails.subject) ||
        validate(userDetails.message)
    ) {
        return {
            success: false,
            message: 'Invalid input!'
        }
    }

    try {
        resend.emails.send({
            from: 'Innova Bridge Contact Form <onboarding@resend.dev>', // see note below
            to: 'prayushbogati0120@gmail.com',
            replyTo: userDetails.email,
            subject: `New Contact: ${userDetails.subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${userDetails.name}</p>
                <p><strong>Email:</strong> ${userDetails.email}</p>
                <p><strong>Phone:</strong> ${userDetails.phone || 'Not provided'}</p>
                <p><strong>Subject:</strong> ${userDetails.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${userDetails.message}</p>
            `
        })

        return {
            success: true,
            message: 'Message Sent!',
            values: null
        }
    } catch (error) {
        console.error('Email send failed:', error)
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
            values: userDetails
        }
    }
}