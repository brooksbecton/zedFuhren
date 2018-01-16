import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';

export default class BadQuest extends Component {
	render() {
		return (
			<Card>
				<Card.Primary>
					<Card.Title>Main Quest</Card.Title>
					<Card.Subtitle>Bad Ending</Card.Subtitle>
				</Card.Primary>
				<Card.SupportingText>
					<ol>
						<li>
							<Switch /> Gas
						</li>
						<li>
							<Switch /> Fire
						</li>
						<li>
							<Switch /> Power
						</li>
						<li>
							<Switch /> Escort and Charge both sides
						</li>
				
						<li>
							<Switch /> Charge Salt Mine
						</li>
				
						<li>
							<Switch /> Power Run
						</li>
						<li>
							<Switch /> Tower
						</li>
						<li>
							<Switch /> Airship
						</li>
						<li>
							<Switch /> Voice of God
						</li>
					</ol>
				</Card.SupportingText>
				{/* <Card.Actions>
        <Card.Action>OKAY</Card.Action>
    </Card.Actions> */}
			</Card>
		);
	}
}
