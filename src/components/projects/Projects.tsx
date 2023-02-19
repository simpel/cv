import { Container, Title, Text, Anchor, List } from '@mantine/core';
import Row from '../row/Row';
import type { TProjects } from './TProjects';

const Projects = ({ data }: TProjects) => {
	console.log(data);

	return (
		<Container mt="50px">
			<Row pillar={data.intro.pillar}>
				<Title order={2}>{data.intro.title}</Title>
			</Row>

			<Row>
				<Text size="md">{data.intro.description}</Text>
			</Row>
			<Row>
				<List spacing="xs" size="sm" center>
					{data.projects.map((project) => (
						<List.Item>
							<Anchor key={project.title} href={project.url}>
								{project.title}
							</Anchor>
						</List.Item>
					))}
				</List>
			</Row>
		</Container>
	);
};

export default Projects;
