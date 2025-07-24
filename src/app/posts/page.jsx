import Link from 'next/link';
import React from 'react';


export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}


const Posts = async () => {
    const posts = await getPosts();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                posts.map((post) => (
                    <div key={post.id} className='p-4 border-b mb-2 border-gray-200'>
                        <h2 className='text-xl font-bold'>{post.title}</h2>
                        <p className='text-gray-500'>{post.body}</p>
                        <Link href={`/posts/${post.id}`}>
                            <button className='bg-green-600 px-2 py-1 rounded-md cursor-pointer'> Details</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Posts;