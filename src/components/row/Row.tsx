import { Grid } from '@mantine/core';
import { useStyles } from '../../styles/Page.styles';
import type { TRow } from './TRow';

const Row = ({ children, pillar }: TRow) => {
	const styles = useStyles();

	console.log('pillar', children);

	return (
		<Grid columns={24}>
			<Grid.Col span={'content'} className={styles.classes.pillar}>
				<div className={styles.classes.hello}>{pillar}</div>
			</Grid.Col>
			<Grid.Col span={'auto'}>{children}</Grid.Col>
			<Grid.Col span={'content'} className={styles.classes.pillar} />
		</Grid>
	);
};

export default Row;
