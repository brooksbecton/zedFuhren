import { h, Component } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";

import style from "./../../style";
import BottomNav from "./BottomNav";

export default class BadQuest extends Component {
  constructor() {
    super();

    this.state = { showFinishedTasks: false };
  }

  render() {
    const { saveStep, steps, badQuestSteps } = this.props;

    return (
      <div>
        <h1>First Quest</h1>
        <h2>Bad Ending</h2>
        <ul>
          {badQuestSteps.map(stepId => {
            const taskFinished = steps[stepId].finished;
            if (!taskFinished) {
              return (
                <li
                  class={taskFinished && style.finished}
                  onClick={() => saveStep(stepId)}
                >
                  {steps[stepId] && steps[stepId].body}
                </li>
              );
            }
          })}
        </ul>
        <BottomNav />
      </div>
    );
  }
}
