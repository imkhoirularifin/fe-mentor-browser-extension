'use client';

import Image from 'next/image';
import ExtensionCard from '@/components/extension-card';
import React, { useEffect, useState } from 'react';
import data from './data.json';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery } from '@/utils/filter';
import ThemeSwitcher from '@/components/theme-switcher';
import { Extension } from '@/types/extension';

export default function Page() {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get('filter') || 'all';

	const [filter, setFilter] = useState<string>(query);
	const [extensions, setExtensions] = useState<Extension[]>(data);

	// Set the filter in the URL
	useEffect(() => {
		if (!!filter) {
			const newUrl = formUrlQuery({
				key: 'filter',
				value: filter,
				searchParams: searchParams.toString(),
				pathName: pathname,
			});
			router.push(newUrl);
		}
	}, [filter, pathname, router, searchParams]);

	const handleFilterClick = (filterValue: string) => {
		setFilter(filterValue);
	};

	// Handle toggle extension status
	const handleToggleStatus = (index: number) => {
		setExtensions((prevExtensions) =>
			prevExtensions.map((extension, i) =>
				i === index
					? { ...extension, isActive: !extension.isActive }
					: extension
			)
		);
	};

	// Handle remove extension
	const handleRemove = (index: number) => {
		setExtensions((prevExtensions) =>
			prevExtensions.filter((_, i) => i !== index)
		);
	};

	// Filter extensions based on filter value
	const filteredExtensions =
		filter === 'all'
			? extensions
			: extensions.filter((extension) =>
					filter === 'active' ? extension.isActive : !extension.isActive
				);

	return (
		<main>
			{/* Header */}
			<header>
				<div>
					<Image
						src='/images/logo.svg'
						alt='Browser Extension Manager'
						width={40}
						height={41}
						priority
					/>
					<span>Extensions</span>
				</div>
				<div>
					<ThemeSwitcher />
				</div>
			</header>

			{/* Main Content */}
			<div>
				<div>
					<h1>Extensions List</h1>
					<div>
						<button onClick={() => handleFilterClick('all')}>All</button>
						<button onClick={() => handleFilterClick('active')}>Active</button>
						<button onClick={() => handleFilterClick('inactive')}>
							Inactive
						</button>
					</div>
				</div>

				{/* Extensions Grid */}
				<div>
					{filteredExtensions.map((extension) => {
						// Find the original index in the full extensions array
						const originalIndex = extensions.findIndex(
							(ext) =>
								ext.name === extension.name &&
								ext.description === extension.description
						);

						return (
							<ExtensionCard
								key={originalIndex}
								extension={extension}
								onToggleStatus={() => handleToggleStatus(originalIndex)}
								onRemove={() => handleRemove(originalIndex)}
							/>
						);
					})}
				</div>
			</div>
		</main>
	);
}
