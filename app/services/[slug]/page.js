import { use } from 'react';
import { services } from '@/lib/services';
import Image from 'next/image';



export  function ServicePage({ params }) {
    const { slug } = use(params);
    const service = services.find(service => (
        service.slug === slug
    ))

    return (
        <div className='px-10 md:px-20 py-10 lg:px-50 h-screen flex flex-col items-center'>
            <h1 className='text-3xl'>{service.name}</h1>
            <div className='relative aspect-video w-150 max-w-full my-5'>
                <Image src={service.image} alt={service.name} sizes='5' fill className='object-cover h-auto w-auto' />
            </div>
            <p className='text-justify lg:text-center text-lg'>{service.description}</p>
        </div>
    )
}