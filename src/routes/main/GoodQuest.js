import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';

export default class GoodQuest extends Component {
	render() {
		return (
			<Card>
				<Card.Primary>
					<Card.Title>Hard Quest</Card.Title>
					<Card.Subtitle>Good Ending</Card.Subtitle>
				</Card.Primary>
				<Card.SupportingText>
					<ol>
						<li>
							<Switch /> Pub Power
							<ul>
								<li>
									<Switch /> Spin the Chicken
								</li>
								<li>
									<Switch /> Shoot the light
								</li>
							</ul>
						</li>
						<li>
							<Switch /> Tops
						</li>
						<li>
							<Switch /> Enigma Puzzles
						</li>
						<li>
							<Switch /> Reset Bunker Power
							<ol>
								<li>
									<Switch /> Place Record
								</li>
								<li>
									<Switch /> Hit both side power switched
								</li>
								<li>
									<Switch /> Hit 3rd in command
								</li>
								<li>
									<Switch /> Hit coils with <strong>Upgraded</strong> telsa
								</li>
								<li>
									<Switch /> Scrolls until blue on both sides
								</li>
								<li>
									<Switch /> Get <em>Red Talon</em>
								</li>
							</ol>
						</li>
						<li>
							<Switch /> Charge Red Talon
							<ol>
								<li>
									<Switch /> Go to Pub
								</li>
								<li>
									<Switch /> Kill 30-50 zombies before the song on the record
									player finishes playing.
								</li>
							</ol>
							* <em>Best to do this on a pest round</em>
						</li>
						<li>
							<Switch /> Listen for record clicks
						</li>
						<li>
							<Switch /> Input Second voice of God
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
