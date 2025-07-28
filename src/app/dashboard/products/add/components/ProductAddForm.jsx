'use client';

import { postSingleData } from '@/app/actions/products/postSingleProduct';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProductAddForm = () => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const payload = { name, email };
        console.log(payload);

        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name: userName, email: userEmail }),
        // });

        // if (res.ok) {
        //     console.log('User added successfully');
        //     
        //     e.target.reset()
        // } else {
        //     console.error('Failed to add product');
        // }

        console.log('About to call postSingleData');
        const result = await postSingleData(payload);
        console.log('After calling postSingleData');
        console.log(result);
        router.push('/products');
    };


    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-white'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-2 w-xl mx-auto p-8 bg-gray-800 rounded-2xl'>
                <input className='bg-black/40 rounded-xl text-white px-4 py-2 w-full' type="text" name="name" id="" placeholder='Your Name' />
                <input className='bg-black/40 rounded-xl text-white px-4 py-2 w-full' type="text" name="email" id="" placeholder='Your Email' />
                <button className='bg-black text-white px-5 py-2 w-full cursor-pointer' type="submit">Add User</button>
            </form>
        </div>
    );
};

export default ProductAddForm;