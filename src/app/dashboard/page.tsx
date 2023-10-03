'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import { DashLayout } from './dashLayout';

const page = () => {
    const pathname = usePathname();
    return (
        <DashLayout >
            <div className='text-white'>Hello</div>
        </DashLayout>
    );
}

export default page