import type { MantineThemeOverride } from '@mantine/core';

const themeStyle: MantineThemeOverride = {
	fontFamily: 'Inter, sans-serif',
	headings: {
		fontFamily: 'Gloock, sans-serif',
		fontWeight: 400,
		sizes: {
			h1: {
				fontSize: '4rem',
			},
			h2: {
				fontSize: '2rem',
			},
		},
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 18,
		lg: 24,
		xl: 48,
	},
	components: {
		Title: {
			defaultProps: {
				color: 'black',
			},
		},
		Text: {
			defaultProps: {
				color: 'dark.3',
				size: '1.3rem',
			},
		},
	},
	globalStyles: (theme) => ({
		'*, *::before, *::after': {
			boxSizing: 'border-box',
		},
		body: {
			margin: 0,
			padding: 0,
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[7]
					: theme.colors.gray[1],
			color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
			lineHeight: theme.lineHeight,
		},
	}),
};

export default themeStyle;
