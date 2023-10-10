'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import { DashLayout } from './dashLayout';

export default function Page () {
    const pathname = usePathname();
    return (
        <DashLayout >
            <div className='h-full w-full px-10 py-6 text-white'>Hello</div>
        </DashLayout>
    );
}

