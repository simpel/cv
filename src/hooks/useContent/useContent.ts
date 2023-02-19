import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { TContent } from './TContent';

export const useContent = () => {
	return useQuery<AxiosResponse<TContent>, Error>({
		queryKey: [window.location.origin, 'content'],
		staleTime: 1000 * 60 * 60 * 24,
		queryFn: async () => axios.get<TContent>('content.json'),
	});
};
