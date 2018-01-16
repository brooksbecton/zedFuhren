import { h, Component } from "preact";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";

import BottomNav from "./BottomNav";
import capitalizeFirstLetter from "./../../lib/capitalizeFirstLetter";

import style from "./style";

export default class Telsa extends Component {
  constructor() {
    super();

    this.state = { showFinishedTasks: false };
  }

  completeStep = stepId => {
    this.props.saveStep(stepId);
  };

  handleShowFinishedTasks = () => {
    this.setState({ showFinishedTasks: !this.state.showFinishedTasks });
  };

  render() {
    return (
      <div class="telsa">
        <h1>Telsa Guns</h1>
        <p>
          <em>Click task to complete</em>
        </p>
        <span>Show Completed Tasks</span>
        <Switch onClick={() => this.handleShowFinishedTasks()} />
        {Object.keys(this.props.telsa).map(gunName => (
          <div>
            <h2 id={gunName}>{capitalizeFirstLetter(gunName)}</h2>
            <ul>
              {this.props.telsa[gunName].map(stepId => {
                const taskFinished = this.props.steps[stepId].finished;
                const taskText = this.props.steps[stepId].body;

                if (this.state.showFinishedTasks || !taskFinished) {
                  return (
                    <li
                      class={taskFinished && style.finished}
                      onClick={() => this.completeStep(stepId)}
                    >
                      {taskText}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        ))}
        <BottomNav telsaGuns={Object.keys(this.props.telsa)} />
      </div>
    );
  }
}
