import React from 'react';

const ProductsPage = async () => {

    const res = await fetch('http://localhost:3000/api/items')
    const data = await res.json();

    return (
        <div>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default ProductsPage;