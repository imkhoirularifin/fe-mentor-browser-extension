import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Browser Extension Manager',
	description: 'A modern browser extension manager interface',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
