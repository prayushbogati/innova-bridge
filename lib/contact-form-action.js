'use server'

function validate(text) {
    return (
        !text || text.trim().length === 0
    )
}

export async function handleFormData(prevState, formData) {
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

    console.log(userDetails.name);
    console.log(userDetails.email);
    console.log(userDetails.phone);
    console.log(userDetails.subject);
    console.log(userDetails.message);
    return {
        success: true,
        message: 'Message Sent!'
    }
}