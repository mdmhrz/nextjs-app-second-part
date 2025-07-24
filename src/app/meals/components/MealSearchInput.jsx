'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MealSearchInput = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search }
        const urlQueryParam = new URLSearchParams(searchQuery).toString();
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url);
    }, [search]);

    return (
        <div>
            <input
                type='text'
                placeholder='Search for meals...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='border p-2 rounded w-full'
            />
        </div>
    );
};

export default MealSearchInput;