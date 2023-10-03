'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { DashLayout } from '../dashLayout';

const page = () => {
    const pathname = usePathname();
    return (
        <DashLayout >
            <div>train</div>
        </DashLayout>
    );
}

export default page