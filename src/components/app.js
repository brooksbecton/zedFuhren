import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Credits from "../routes/credits";
import Home from "../routes/home";
import Telsa from "../routes/telsa";
import Main from "../routes/main/";
import GoodQuest from "../routes/main/GoodQuest";
import BadQuest from "../routes/main/BadQuest";

// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
  constructor() {
    super();

    const telsaMidnight = {
      //Midnight
      3480294440: {
        body: "Collect a Brenner Zombie boss head.",
        blockers: [],
        finished: false
      },
      2539715899: {
        body:
          "Shine the purple light onto a statue to the left of the stairs to the Courtyard. The statue will shatter.",
        blockers: [],
        finished: false
      },
      2863260193: {
        body:
          "Shoot the broken statue with the Tesla Gun and collect the battery.",
        blockers: [],
        finished: false
      },
      9230601361: {
        body: "Place the battery in the charger in the Courtyard nearby.",
        blockers: [],
        finished: false
      },
      7919067966: {
        body: "Get kills with the Courtyard trap (30~) to charge the battery.",
        blockers: [],
        finished: false
      },
      9255636040: {
        body:
          "Complete the ‘Firework’ casual Easter egg quest step where you’ll need to protect the lightning rods at the base of the Tower.",
        blockers: [],
        finished: false
      },
      7360589881: {
        body:
          "Take the battery and return to the lab. Place it to the left of the machine that spawned one of the Tesla Gun parts.",
        blockers: [],
        finished: false
      },
      8247134400: {
        body:
          "Protect the battery (1-2 minutes) and collect the part from the crafting station.",
        blockers: [],
        finished: false
      },
      1031605516: {
        body:
          "Return to the Weapon Forge in the Command room and use the part plus the Tesla Gun.",
        blockers: [],
        finished: false
      }
    };

    const telsaReaper = {
      4560004244: {
        body:
          "After collecting the Tesla Gun, make sure the doors to the Sewers (the Pack-a-Punch upgrade station area) are open.",
        blockers: [],
        finished: false
      },
      4557778273: {
        body:
          "Lead a large zombie with the mace-arm to the Weapon Upgrade Station area of the Sewers. They will spawn in Round 7+.",
        blockers: [],
        finished: false
      },
      5469501863: {
        body:
          "The large zombies need to hit the gray door-like compartment one the exterior wall. Just stand in place in front and take the hit to make sure the compartment opens.",
        blockers: [],
        finished: false
      },
      2848093619: {
        body:
          "Collect the battery and place it in the charger station near the Weapon Upgrade Station.",
        blockers: [],
        finished: false
      },
      7021031599: {
        body:
          "Activate the Saw Trap in the Sewers to charge the battery with bomber zombie souls. Only 4-6 are required.",
        blockers: [],
        finished: false
      },
      5897342114: {
        body:
          "The battery will glow green when zombies are standing close enough to accept a charge.",
        blockers: [],
        finished: false
      },
      1207408977: {
        body:
          "Complete the casual Easter egg step requiring you defend the lightning rods at the base of the tower.",
        blockers: [],
        finished: false
      },
      9731084760: {
        body:
          "Place the battery in the slot to the right of the Tesla Gun Part spawner in the Morgue.",
        blockers: [],
        finished: false
      },
      7570222849: {
        body: "Defend the battery until a part appear in the machine.",
        blockers: [],
        finished: false
      },
      "0356368718": {
        body:
          "Return to Command and insert the new part with the Tesla Gun to create the “Reaper.”",
        blockers: [],
        finished: false
      }
    };

    const telsaBloodthirst = {
      5072803942: {
        body:
          "Use the normal Tesla Gun to shoot a flickering street lamp in the Riverside area. The lamp buzzes when you’re near — find it to the left of the path down to the docks, behind the large statue.",
        blockers: [],
        finished: false
      },
      3385157574: {
        body:
          "Shoot the strange green sparks that appear from street lamps — follow a path from Riverside, to the Village Entrance, to the Village Square, to Command, then finally the Morgue.",
        blockers: [],
        finished: false
      },
      "0049704035": {
        body:
          "Collect the battery on the ground in the back room of the Morgue, down the steps. It will appear if you shoot every sparking green light.",
        blockers: [],
        finished: false
      },
      5761251088: {
        body:
          "Place the battery in the charger just to the left of the battery spawn point, next to a metal gate with yellow light streaming through.",
        blockers: [],
        finished: false
      },
      1961132256: {
        body:
          "Kill Pest Zombies to charge the battery. It will take 30-50 Pest Zombie souls to fully charge the battery.",
        blockers: [],
        finished: false
      },
      8051369314: {
        body:
          "Continue to follow the casual Easter egg steps until you complete the lightning rod defense at the Tower.",
        blockers: [],
        finished: false
      },
      8700851695: {
        body:
          "Place the charged battery in the slot to the left of the Morgue Tesla Gun part spawner.",
        blockers: [],
        finished: false
      },
      9199338960: {
        body: "Defend the battery from waves of zombies until the part spawns.",
        blockers: [],
        finished: false
      },

      3480294440: {
        body:
          "Insert the part into the Weapon Forge on the upper floor of the Command Room to unlock the Bloodthirst variant.",
        blockers: [],
        finished: false
      }
    };

    const telsaHurricane = {
      8362383675: {
        body:
          "Lead a Bomber zombie to the Lab and let it explode over a gray metal panel.",
        blockers: [],
        finished: false
      },
      6995425451: {
        body:
          "Lead a Bomber zombie to the Lab and let it explode over a gray metal panel.",
        blockers: [],
        finished: false
      },
      7789138115: {
        body:
          "Take the battery inside and place it in the charger located in the electricity trap hallway.",
        blockers: [],
        finished: false
      },
      3561239992: {
        body:
          "Wait until two Wustling (large charger zombies) spawn in a wave. Kill two Wustling zombies at the same time with the Lab electricity trap to charge the battery.",
        blockers: [],
        finished: false
      },
      1138963590: {
        body:
          "You’ll need to do this twice — for a total of 4 Wustling zombie kills using the trap only.",
        blockers: [],
        finished: false
      },
      9980398946: {
        body:
          "Complete the lightning rod defense quest at the Tower while completing the casual Easter egg.",
        blockers: [],
        finished: false
      },
      6681327650: {
        body:
          "Grab the battery and place it in the slot to the right of the Lab Tesla Gun part machine.",
        blockers: [],
        finished: false
      },
      2965353273: {
        body: "Defend the battery from waves of zombies until the part spawns.",
        blockers: [],
        finished: false
      },
      9179158772: {
        body:
          "Insert the part into the Weapon Forge on the upper floor of the Command Room to unlock the Hurricane variant.",
        blockers: [],
        finished: false
      }
    };

    this.state = {
      good: [],
      bad: [],
      telsa: {
        midnight: [
          "3480294440",
          "2539715899",
          "2863260193",
          "9230601361",
          "7919067966",
          "9255636040",
          "7360589881",
          "8247134400",
          "1031605516"
        ],
        reaper: [
          "4560004244",
          "4557778273",
          "5469501863",
          "2848093619",
          "7021031599",
          "5897342114",
          "1207408977",
          "9731084760",
          "7570222849",
          "0356368718"
        ],
        bloodthirst: [
          "5072803942",
          "3385157574",
          "0049704035",
          "5761251088",
          "1961132256",
          "8051369314",
          "8700851695",
          "9199338960",
          "3480294440"
        ],
        hurricane: [
          "8362383675",
          "6995425451",
          "7789138115",
          "3561239992",
          "1138963590",
          "9980398946",
          "6681327650",
          "2965353273",
          "9179158772"
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

  componentDidMount() {
    this.getStepsFromLocalStorage();
  }

  /**
   * Reads steps from localStorage, if availible,
   * and updates state
   */
  getStepsFromLocalStorage = () => {
    if (typeof Storage !== "undefined") {
      const steps = JSON.parse(localStorage.getItem("steps"));
      if (steps) {
        this.setState({ steps });
      }
    }
  };

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  /**
   * Sets step's finished property to true in state
   * @param {String} stepId
   */
  toggleStep = stepId => {
    let steps = { ...this.state.steps };
    steps[stepId].finished = !this.state.steps[stepId].finished;
    this.setState({ steps });
    this.saveState();
  };

  /**
   * Saves current state to localStorage
   */
  saveState = () => {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("steps", JSON.stringify(this.state.steps));
    }
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
              saveStep={stepId => this.toggleStep(stepId)}
            />
            <Main path="/main" />
            <GoodQuest path="/main/good" />
            <BadQuest path="/main/bad" />
          </Router>
        </div>
      </div>
    );
  }
}
