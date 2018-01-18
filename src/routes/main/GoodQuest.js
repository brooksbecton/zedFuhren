import { h, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";

export default class GoodQuest extends Component {
  render() {
    return (
      <Card>
        <Card.Primary>
          <Card.Title>Hard Quest</Card.Title>
          <Card.Subtitle>Good Ending</Card.Subtitle>
        </Card.Primary>
        <Card.SupportingText>
          <ul>
            <li>Restore Power to the Pub</li>
            <li>Find all three tops and place them by toy store</li>
            <li>
              Find the Enigma puzzles in the windows of the town. Align matching
              top to number.
            </li>
            <li>Reset Bunker Power.</li>
            {/* <li>
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
						</li> */}
            <li>Charge Red Talon</li>

            <li>Input Second voice of God</li>
          </ul>
        </Card.SupportingText>
        {/* <Card.Actions>
<Card.Action>OKAY</Card.Action>
</Card.Actions> */}
      </Card>
    );
  }
}
