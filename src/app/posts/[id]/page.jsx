import React from 'react';


const getSinglePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;

}

export async function generateMetadata({ params }) {
    // read route params
    const { id } = await params

    // fetch data
    const signlePost = await getSinglePost(id)

    return {
        title: signlePost.title,
        description: signlePost.body,
    }
}



const SignlePost = async ({ params }) => {
    const post = await getSinglePost(params.id);
    const p = await params.id;

    return (
        <div className='max-w-2xl mx-auto flex  items-center justify-center min-h-screen'>
            <div className='p-4 bg-gray-700'>
                <h1 className='text-2xl font-bold mb-2'>{post.title}</h1>
                <p className='text-gray-400 mb-4'>{post.body}</p>
                <p className='text-gray-300 font-bold'>Post ID: {p}</p>
            </div>
        </div>
    );
};

export default SignlePost;