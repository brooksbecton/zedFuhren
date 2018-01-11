import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

import capitalizeFirstLetter from './../../lib/capitalizeFirstLetter';
import bottomNav from './style';

import style from './style';

export default class BottomNav extends Component {
	render() {
		return (
			<nav class={style.bottomNav}>
				<ul>
					{this.props.telsaGuns.map(gunName => (
						<li>
							<a href={`#${gunName}`}>{capitalizeFirstLetter(gunName)}</a>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}
