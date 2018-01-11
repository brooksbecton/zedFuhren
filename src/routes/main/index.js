import { h, Component } from 'preact';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';

import BadQuest from './BadQuest';
import GoodQuest from './GoodQuest';
import style from './style.css';

export default class Main extends Component {
	render() {
		return (
			<div class={style.main}>
				<LayoutGrid cols="2">
					<LayoutGrid.Inner>
						<LayoutGrid.Cell>
							<GoodQuest />
							<BadQuest />
						</LayoutGrid.Cell>
						<LayoutGrid.Cell cols="6" />
					</LayoutGrid.Inner>
				</LayoutGrid>
			</div>
		);
	}
}
