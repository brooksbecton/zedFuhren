import { h, Component } from "preact";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";
import LayoutGrid from "preact-material-components/LayoutGrid";

import BadQuest from "./BadQuest";
import GoodQuest from "./GoodQuest";
import BottomNav from "./BottomNav";
import style from "./style.css";


export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      currentQuest: 0
    };
  }

  renderQuest = () => {
	switch(this.state.currentQuest){
		case 0:
			return <GoodQuest />
		case 1: 
			return <BadQuest />
	}
  };

  render() {
    return (
      <div class={style.main}>
        <LayoutGrid cols="2">
          <LayoutGrid.Inner>
            <LayoutGrid.Cell>
              {this.renderQuest()}
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="6" />
          </LayoutGrid.Inner>
        </LayoutGrid>
		<BottomNav/>
      </div>
    );
  }
}
