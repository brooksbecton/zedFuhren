import { h, Component } from "preact";
import { route } from "preact-router";

import capitalizeFirstLetter from "./../../lib/capitalizeFirstLetter";
import bottomNavStyle from "./../telsa/style";
import style from "./style";

export default class BottomNav extends Component {
  render() {
    return (
      <nav class={bottomNavStyle.bottomNav}>
        <ul class={style.bottomNav}>
          <a onClick={() => route("/main/good")}>
            <li>Good</li>
          </a>
          <a onClick={() => route("/main/bad")}>
            <li>Bad</li>
          </a>
        </ul>
      </nav>
    );
  }
}
