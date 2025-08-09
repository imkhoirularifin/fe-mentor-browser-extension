'use client';

import { Extension } from '@/types/extension';
import Image from 'next/image';

interface ExtensionCardProps {
	extension: Extension;
	onToggleStatus: () => void;
	onRemove: () => void;
}

export default function ExtensionCard({
	extension,
	onToggleStatus,
	onRemove,
}: ExtensionCardProps) {
	const { logo, name, description, isActive } = extension;

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
