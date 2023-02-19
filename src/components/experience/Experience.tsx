import { Text, Title } from '@mantine/core';
import type { TExperience } from '../../hooks/useContent/TContent';
import { useStyles } from '../../styles/Page.styles';
import type { TExperienceTitle } from './TExperience';

const Experience = ({
	start,
	end,
	title,
	description,
	company,
}: TExperience) => {
	const styles = useStyles();

	return (
		<>
			<Text color={'dimmed'} size="md" mb={'md'} mt="xs">
				{company ? `${company} / ` : ''} {start} {end ? `— ${end}` : ''}
			</Text>
			<Text>{description}</Text>
		</>
	);
};

Experience.Title = ({ children }: TExperienceTitle) => {
	return <Title order={3}>{children}</Title>;
};

export default Experience;
