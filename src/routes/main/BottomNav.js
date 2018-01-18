import { h, Component } from "preact";

import capitalizeFirstLetter from "./../../lib/capitalizeFirstLetter";
import bottomNavStyle from "./../telsa/style";
import style from "./style";

export default class BottomNav extends Component {
  render() {
    return (
      <nav class={bottomNavStyle.bottomNav}>
        <ul class={style.bottomNav}>
          <a href="#">
            <li>Good</li>
          </a>
          <a href="#">
            <li>Bad</li>
          </a>
        </ul>
      </nav>
    );
  }
}
