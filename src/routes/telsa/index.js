import { h, Component } from 'preact';

import capitalizeFirstLetter from './../../lib/capitalizeFirstLetter';

export default class Telsa extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h1>Telsa Guns</h1>
				{Object.keys(this.props.telsa).map(gunName => (
					<div>
						<h2>{capitalizeFirstLetter(gunName)}</h2>
						<ol>
							{this.props.telsa[gunName].map(stepId => (
								<li>{this.props.steps[stepId].body}</li>
							))}
						</ol>
					</div>
				))}
			</div>
		);
	}
}
