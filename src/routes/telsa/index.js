import { h, Component } from 'preact';

import BottomNav from './BottomNav';
import capitalizeFirstLetter from './../../lib/capitalizeFirstLetter';

export default class Telsa extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class="telsa">
				<h1>Telsa Guns</h1>
				{Object.keys(this.props.telsa).map(gunName => (
					<div>
						<h2 id={gunName}>{capitalizeFirstLetter(gunName)}</h2>
						<ol>
							{this.props.telsa[gunName].map(stepId => (
								<li>{this.props.steps[stepId].body}</li>
							))}
						</ol>
					</div>
				))}
				<BottomNav telsaGuns={Object.keys(this.props.telsa)} />
			</div>
		);
	}
}
