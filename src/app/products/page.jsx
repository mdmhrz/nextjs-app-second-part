import React from 'react';
import { headers } from 'next/headers';
import { getProducts } from '../actions/products/getProducts';

// export const dynamic = 'force-dynamic'; // ensure runtime rendering

const ProductsPage = async () => {
    // Get the current host dynamically from the request headers
    // const host = headers().get('host'); // e.g., "localhost:3000" or "your-app.vercel.app"
    // const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    // const baseUrl = `${protocol}://${host}`;


    // // Fetch data from your API route
    // const res = await fetch(`${baseUrl}/api/items`, {
    //     cache: 'no-store', // disable caching for fresh data
    //     next: { revalidate: 0 } // ensure no ISR
    // });

    // if (!res.ok) {
    //     throw new Error('Failed to fetch products');
    // }

    // const data = await res.json();


    const data = await getProducts();

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'>Products</h1>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {data.map((item) => (
                    <div key={item._id} className='bg-gray-800 text-white p-4 rounded-lg mb-4'>
                        <h2 className='text-xl font-semibold'>{item.name}</h2>
                        <p>{item.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
