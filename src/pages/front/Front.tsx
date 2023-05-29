import { Container, Title, Text, Grid, Skeleton, Space, Anchor, SimpleGrid } from '@mantine/core';
import Experiences from '../../components/experiences/Experiences';
import Projects from '../../components/projects/Projects';
import { useContent } from '../../hooks/useContent/useContent';
import { useStyles } from '../../styles/Page.styles';

const Front = () => {
	const styles = useStyles();
	const { data, isLoading } = useContent();

	if (isLoading || !data) {
		return (
			<Container mt={250}>
				<Skeleton width="30%" height="33px" mb={'18px'} />
				<Skeleton width="100%" height="24px" mb={'13px'} />
				<Skeleton width="100%" height="24px" mb={'13px'} />
				<Skeleton width="100%" height="24px" mb={'13px'} />
				<Skeleton width="82%" height="24px" mb={'13px'} />
			</Container>
		);
	}

	return (
		<>
			<Container className={styles.classes.top}>
				<Grid columns={24}>
					<Grid.Col span={'content'} className={styles.classes.pillar}>
						<div className={styles.classes.hello}></div>
					</Grid.Col>
					<Grid.Col span={'auto'}>
						<Title>{data.data.header.intro.title}</Title>
					</Grid.Col>
					<Grid.Col span={'content'} className={styles.classes.pillar} />
				</Grid>
				<Grid columns={24}>
					<Grid.Col span={'content'} className={styles.classes.pillar}>
						<div className={styles.classes.hello}>
							{data.data.header.intro.pillar}
						</div>
					</Grid.Col>
					<Grid.Col span={'auto'}>
						<Text
							size="lg"
							dangerouslySetInnerHTML={{
								__html: data.data.header.intro.description,
							}}
						/>
						<Space h={30}/>
						<SimpleGrid>
						<Anchor href='https://www.linkedin.com/in/joelsanden/'>LinkedIn</Anchor> <Space w={20}/> <Anchor href='https://github.com/simpel/'>LinkedIn</Anchor>
						</SimpleGrid>
					</Grid.Col>
					<Grid.Col span={'content'} className={styles.classes.pillar} />
				</Grid>
			</Container>
			<Experiences data={data.data.cv} />
			<Projects data={data.data.projects} />
			<Container>
				<Text size="xs" mt={'200px'} mb="20px" align="center">
					The end
				</Text>
			</Container>
		</>
	);
};

export default Front;
