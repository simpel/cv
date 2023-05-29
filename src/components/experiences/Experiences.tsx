import { Container, Title, Text, Timeline } from '@mantine/core';
import Experience from '../experience/Experience';
import Row from '../row/Row';

import type { TExperiences } from './TExperiences';

const Experiences = ({ data }: TExperiences) => {
	return (
		<Container mt="50px">
			<Row pillar={data.intro.pillar}>
				<Title order={2}>{data.intro.title}</Title>
			</Row>

			<Row>
				<Text size="md">{data.intro.description}</Text>
			</Row>
			<Row>
				<Timeline lineWidth={2} active={-1} mt="xl">
					{data.experiences.map((experience) => (
						<Timeline.Item
							key={experience.title.trim()}
							title={
								<Experience.Title>
									{experience.icon
										? `${experience.icon} ${experience.title}`
										: `${experience.title}`}
								</Experience.Title>
							}
						>
							<Experience {...experience} />
						</Timeline.Item>
					))}
				</Timeline>
			</Row>
		</Container>
	);
};

export default Experiences;
