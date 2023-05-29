import {
	Container,
	Title,
	Text,
	Anchor,
	List as MantineList,
} from '@mantine/core';
import Row from '../row/Row';
import type { TList } from './TList';

const List = ({ data }: TList) => {
	return (
		<Container mt="50px">
			<Row pillar={data.intro.pillar}>
				<Title order={2}>{data.intro.title}</Title>
			</Row>

			<Row>
				<Text size="md">{data.intro.description}</Text>
			</Row>
			<Row>
				<MantineList spacing="xs" size="sm" center withPadding>
					{data.list.map((item) => (
						<MantineList.Item key={item.title.trim()}>
							<Anchor key={item.title} href={item.url}>
								{item.title}
							</Anchor>
						</MantineList.Item>
					))}
				</MantineList>
			</Row>
		</Container>
	);
};

export default List;
