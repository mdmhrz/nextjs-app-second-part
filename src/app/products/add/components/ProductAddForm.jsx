'use client';

import React from 'react';

const ProductAddForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userName = formData.get('name');
        const userEmail = formData.get('email');

        const res = await fetch('http://localhost:3000/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: userName, email: userEmail }),
        });

        if (res.ok) {
            console.log('Product added successfully');
            formData.set('name', '');
            formData.set('email', '');
        } else {
            console.error('Failed to add product');
        }
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