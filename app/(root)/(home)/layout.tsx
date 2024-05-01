import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
	title: 'Zoom Clone',
	description: 'Video calling app',
	icons: {
		icon: '/icons/zoom-icon.svg',
	},
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className='relative'>
			<Navbar />
			<div className='flex'>
				<Sidebar />
				<section
					className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14
				'
				>
					<div className='w-full'>{children}</div>
				</section>
			</div>
		</main>
	);
};

export default RootLayout;
