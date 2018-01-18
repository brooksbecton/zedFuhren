import { h, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";

export default class BadQuest extends Component {
  render() {
    return (
      <Card>
        <Card.Primary>
          <Card.Title>Main Quest</Card.Title>
          <Card.Subtitle>Bad Ending</Card.Subtitle>
        </Card.Primary>
        <Card.SupportingText>
          <ul>
            <li>Find the three valves in town and activate fire trap.</li>
            <li>Activate the power to the bunker.</li>
            <li>Charge the hilt in the salt mine.</li>
            <li>Open metal hood to allow hilt to rise.</li>
            <li>
              Start the powering up the hilt by hitting hitting the button by
              the telsa gun.
            </li>
            <li>
              Kill zombies in the hilt's circle and assemble telsa gun parts on
              the lab and morgue side.
            </li>
            <li>Kill the flamethrower in the command room</li>
            <li>Assemble the telsa gun.</li>
            <li>Route power to the tower.</li>
            <li>Defend the tower.</li>
            <li>Activate the right hand of god.</li>
            <li>
              Shoot down batteries from blimp and kill zombies in the circle.
            </li>
            <li>
              Once charged, carry them to the right hand of god. 3 batteries are required{" "}
            </li>
            <li>
              Use the flamethrower's head on paintings around the map to get
              number's for the voice of god in the salt mine.
            </li>
          </ul>
        </Card.SupportingText>
      </Card>
    );
  }
}
