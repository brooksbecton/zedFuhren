import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Credits from '../routes/credits';
import Home from '../routes/home';
import Telsa from '../routes/telsa';
import Main from '../routes/main';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	constructor() {
		super();

		const telsaMidnight = {
			//Midnight
			3480294440: {
				body: 'Collect a Brenner Zombie boss head.',
				blockers: []
			},
			2539715899: {
				body:
					'Shine the purple light onto a statue to the left of the stairs to the Courtyard. The statue will shatter.',
				blockers: []
			},
			2863260193: {
				body:
					'Shoot the broken statue with the Tesla Gun and collect the battery.',
				blockers: []
			},
			9230601361: {
				body: 'Place the battery in the charger in the Courtyard nearby.',
				blockers: []
			},
			7919067966: {
				body: 'Get kills with the Courtyard trap (30~) to charge the battery.',
				blockers: []
			},
			9255636040: {
				body:
					'Complete the ‘Firework’ casual Easter egg quest step where you’ll need to protect the lightning rods at the base of the Tower.',
				blockers: []
			},
			7360589881: {
				body:
					'Take the battery and return to the lab. Place it to the left of the machine that spawned one of the Tesla Gun parts.',
				blockers: []
			},
			8247134400: {
				body:
					'Protect the battery (1-2 minutes) and collect the part from the crafting station.',
				blockers: []
			},
			1031605516: {
				body:
					'Return to the Weapon Forge in the Command room and use the part plus the Tesla Gun.',
				blockers: []
			}
		};

		const telsaReaper = {
			4560004244: {
				body:
					'After collecting the Tesla Gun, make sure the doors to the Sewers (the Pack-a-Punch upgrade station area) are open.',
				blockers: []
			},
			4557778273: {
				body:
					'Lead a large zombie with the mace-arm to the Weapon Upgrade Station area of the Sewers. They will spawn in Round 7+.',
				blockers: []
			},
			5469501863: {
				body:
					'The large zombies need to hit the gray door-like compartment one the exterior wall. Just stand in place in front and take the hit to make sure the compartment opens.',
				blockers: []
			},
			2848093619: {
				body:
					'Collect the battery and place it in the charger station near the Weapon Upgrade Station.',
				blockers: []
			},
			7021031599: {
				body:
					'Activate the Saw Trap in the Sewers to charge the battery with bomber zombie souls. Only 4-6 are required.',
				blockers: []
			},
			5897342114: {
				body:
					'The battery will glow green when zombies are standing close enough to accept a charge.',
				blockers: []
			},
			1207408977: {
				body:
					'Complete the casual Easter egg step requiring you defend the lightning rods at the base of the tower.',
				blockers: []
			},
			9731084760: {
				body:
					'Place the battery in the slot to the right of the Tesla Gun Part spawner in the Morgue.',
				blockers: []
			},
			7570222849: {
				body: 'Defend the battery until a part appear in the machine.',
				blockers: []
			},
			'0356368718': {
				body:
					'Return to Command and insert the new part with the Tesla Gun to create the “Reaper.”',
				blockers: []
			}
		};

		const telsaBloodthirst = {
			5072803942: {
				body:
					'Use the normal Tesla Gun to shoot a flickering street lamp in the Riverside area. The lamp buzzes when you’re near — find it to the left of the path down to the docks, behind the large statue.',
				blockers: []
			},
			3385157574: {
				body:
					'Shoot the strange green sparks that appear from street lamps — follow a path from Riverside, to the Village Entrance, to the Village Square, to Command, then finally the Morgue.',
				blockers: []
			},
			'0049704035': {
				body:
					'Collect the battery on the ground in the back room of the Morgue, down the steps. It will appear if you shoot every sparking green light.',
				blockers: []
			},
			5761251088: {
				body:
					'Place the battery in the charger just to the left of the battery spawn point, next to a metal gate with yellow light streaming through.',
				blockers: []
			},
			1961132256: {
				body:
					'Kill Pest Zombies to charge the battery. It will take 30-50 Pest Zombie souls to fully charge the battery.',
				blockers: []
			},
			8051369314: {
				body:
					'Continue to follow the casual Easter egg steps until you complete the lightning rod defense at the Tower.',
				blockers: []
			},
			8700851695: {
				body:
					'Place the charged battery in the slot to the left of the Morgue Tesla Gun part spawner.',
				blockers: []
			},
			9199338960: {
				body: 'Defend the battery from waves of zombies until the part spawns.',
				blockers: []
			},

			3480294440: {
				body:
					'Insert the part into the Weapon Forge on the upper floor of the Command Room to unlock the Bloodthirst variant.',
				blockers: []
			}
		};

		const telsaHurricane = {
			8362383675: {
				body:
					'Lead a Bomber zombie to the Lab and let it explode over a gray metal panel.',
				blockers: []
			},
			6995425451: {
				body:
					'Lead a Bomber zombie to the Lab and let it explode over a gray metal panel.',
				blockers: []
			},
			7789138115: {
				body:
					'Take the battery inside and place it in the charger located in the electricity trap hallway.',
				blockers: []
			},
			3561239992: {
				body:
					'Wait until two Wustling (large charger zombies) spawn in a wave. Kill two Wustling zombies at the same time with the Lab electricity trap to charge the battery.',
				blockers: []
			},
			1138963590: {
				body:
					'You’ll need to do this twice — for a total of 4 Wustling zombie kills using the trap only.',
				blockers: []
			},
			9980398946: {
				body:
					'Complete the lightning rod defense quest at the Tower while completing the casual Easter egg.',
				blockers: []
			},
			6681327650: {
				body:
					'Grab the battery and place it in the slot to the right of the Lab Tesla Gun part machine.',
				blockers: []
			},
			2965353273: {
				body: 'Defend the battery from waves of zombies until the part spawns.',
				blockers: []
			},
			9179158772: {
				body:
					'Insert the part into the Weapon Forge on the upper floor of the Command Room to unlock the Hurricane variant.',
				blockers: []
			}
		};

		this.state = {
			good: [],
			bad: [],
			telsa: {
				midnight: [
					'3480294440',
					'2539715899',
					'2863260193',
					'9230601361',
					'7919067966',
					'9255636040',
					'7360589881',
					'8247134400',
					'1031605516'
				],
				reaper: [
					'4560004244',
					'4557778273',
					'5469501863',
					'2848093619',
					'7021031599',
					'5897342114',
					'1207408977',
					'9731084760',
					'7570222849',
					'0356368718'
				],
				bloodthirst: [
					'5072803942',
					'3385157574',
					'0049704035',
					'5761251088',
					'1961132256',
					'8051369314',
					'8700851695',
					'9199338960',
					'3480294440'
				],
				hurricane: [
					'8362383675',
					'6995425451',
					'7789138115',
					'3561239992',
					'1138963590',
					'9980398946',
					'6681327650',
					'2965353273',
					'9179158772'
				]
			},
			steps: {
				...telsaMidnight,
				...telsaReaper,
				...telsaBloodthirst,
				...telsaHurricane
			}
		};
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<div class="container">
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Credits path="/credits" />
						<Telsa
							path="/telsa"
							telsa={this.state.telsa}
							steps={this.state.steps}
						/>
						<Main path="/main" />
					</Router>
				</div>
			</div>
		);
	}
}
