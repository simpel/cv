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
		a: {
			display: 'inline-block',
			lineHeight: '1.1',
			textDecoration: 'none !important',
			color: '#000',

			'&::after': {
				content: '""',
				width: '50px',
				display: 'block',
				height: '2px',
				background: '#000',
				transition: 'width .3s, color .3s',
			},

			'&:hover': {
				transition: 'color .3s',
				textDecoration: 'none',
				color: theme.colors.blue[5],
				'&::after': {
					width: '100%',
					background: theme.colors.blue[5],
				},
			},
		},
	}),
};

export default themeStyle;
