'use client';

import Image from 'next/image';

interface ExtensionCardProps {
	logo: string;
	name: string;
	description: string;
	isActive: boolean;
	onToggleStatus: () => void;
	onRemove: () => void;
}

export default function ExtensionCard({
	logo,
	name,
	description,
	isActive,
	onToggleStatus,
	onRemove,
}: ExtensionCardProps) {
	return (
		<div>
			<div>
				<div>
					<Image src={logo} alt={name} width={60} height={60} />
				</div>
				<div>
					<h3>{name}</h3>
					<p>{description}</p>
				</div>
			</div>
			<div>
				<button onClick={onRemove}>
					<span>Remove</span>
				</button>
				<button onClick={onToggleStatus} role='switch' aria-checked={isActive}>
					{isActive ? 'Deactivate' : 'Activate'}
				</button>
			</div>
		</div>
	);
}
