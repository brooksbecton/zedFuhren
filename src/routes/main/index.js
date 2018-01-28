import { h, Component } from "preact";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";
import LayoutGrid from "preact-material-components/LayoutGrid";
import { route } from "preact-router";

import BadQuest from "./BadQuest";
import GoodQuest from "./GoodQuest";
import BottomNav from "./BottomNav";
import style from "./style.css";

export default class Main extends Component {
  render() {
    return (
      <div class={style.main}>
        <h1>Missions</h1>
        <a onClick={() => route("/main/bad")}>bad</a>
        <a onClick={() => route("/main/good")}>good</a>
      </div>
    );
  }
}
