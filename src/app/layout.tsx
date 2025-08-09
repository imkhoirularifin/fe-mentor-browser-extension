import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const notoSans = Noto_Sans({
	variable: '--font-noto-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Frontend Mentor | Browser Extension',
	description: 'Frontend Mentor Browser Extension Challenge',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${notoSans.variable}  antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
