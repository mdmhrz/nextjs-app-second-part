'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    console.log(pathName);
    if (!pathName.includes('dashboard') && !pathName.includes('authPages')) {
        return (
            <nav className='place-items-center bg-gray-900 p-4 shadow-md'>
                <ul className="flex space-x-4">
                    <Link href='/'>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link href='/posts'>
                        <li>
                            Posts
                        </li>
                    </Link>
                    <Link href='/meals'>
                        <li>
                            Meals
                        </li>
                    </Link>
                </ul>
            </nav>
        )
    } else {
        return <></>
    }

};

export default Navbar;