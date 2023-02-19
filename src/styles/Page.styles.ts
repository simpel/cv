import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	top: {
		marginTop: '250px',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginTop: '40px',
		},
	},
	hello: {
		fontSize: '30px',
	},

	pillar: {
		width: '50px',

		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			display: 'none',
		},
	},
}));
