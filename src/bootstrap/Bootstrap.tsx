import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import themeStyle from '../theme/Styles';
import type { TBoostrap } from './TBootstrap';

const Bootstrap = ({ children }: TBoostrap) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={themeStyle}>{children}</MantineProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default Bootstrap;
