import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
	return (
		<nav className='flex-between fixed z-50 w-full px-6 py-4 lg:px-10 bg-dark-1'>
			<Link
				href='/'
				className='flex items-center gap-2'
			>
				<Image
					src='/icons/zoom-icon.svg'
					width={32}
					height={32}
					alt='Zoom Logo'
					className='max-sm:size-10'
				/>
				<p className='text-[26px] font-extrabold text-white max-sm:hidden'>
					Zoom
				</p>
			</Link>
			<div className='flex-between gap-5'>
				{/* Clerk User Management */}
				<SignedIn>
					<UserButton />
				</SignedIn>
				<MobileNav />
			</div>
		</nav>
	);
};

export default Navbar;
