import { h, Component } from "preact";

import capitalizeFirstLetter from "./../../lib/capitalizeFirstLetter";
import style from "./style";

export default class BottomNav extends Component {
  render() {
    return (
      <nav class={style.bottomNav}>
        <ul>
          {this.props.telsaGuns.map(gunName => (
            <a href={`#${gunName}`}>
              <li>{capitalizeFirstLetter(gunName)}</li>
            </a>
          ))}
        </ul>
      </nav>
    );
  }
}
