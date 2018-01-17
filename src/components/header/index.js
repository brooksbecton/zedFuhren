import { h, Component } from "preact";
import { route } from "preact-router";
import Toolbar from "preact-material-components/Toolbar";
import Drawer from "preact-material-components/Drawer";
import List from "preact-material-components/List";
import Dialog from "preact-material-components/Dialog";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Dialog/style.css";
import "preact-material-components/Drawer/style.css";
import "preact-material-components/List/style.css";
import "preact-material-components/Toolbar/style.css";

import clearStepsProgress from "./../../lib/clearStepsProgress";

import {
  goHome,
  goToCredits,
  goToMain,
  goToTelsa
} from "./../../lib/redirects";

export default class Header extends Component {

  constructor() {
    super(); 
	  this.state = {
		  stepsCleared: false
	  }
  } 

  closeDrawer() {
    this.drawer.MDComponent.open = false;
    this.state = {
      darkThemeEnabled: false
    };
  }

  linkTo = path => () => {
    route(path);
    this.closeDrawer();
  };

  drawerRef = drawer => (this.drawer = drawer);
  dialogRef = dialog => (this.dialog = dialog);

  goHome = this.linkTo("/");
  goToCredits = this.linkTo("/credits");
  goToMain = this.linkTo("/main");
  goToTelsa = this.linkTo("/telsa");

  handleClearStorage = () => {
    clearStepsProgress().then(()=> {
		this.setState({stepsCleared: true})
	}).catch(() => {
		
	});
  };

  openDrawer = () => (this.drawer.MDComponent.open = true);
  openSettings = () => this.dialog.MDComponent.show();

  toggleDarkTheme = () => {
    this.setState(
      {
        darkThemeEnabled: !this.state.darkThemeEnabled
      },
      () => {
        if (this.state.darkThemeEnabled) {
          document.body.classList.add("mdc-theme--dark");
        } else {
          document.body.classList.remove("mdc-theme--dark");
        }
      }
    );
  };

  render() {
    return (
      <div>
        <Toolbar className="toolbar" fixed>
          <Toolbar.Row>
            <Toolbar.Section align-start>
              <Toolbar.Icon menu onClick={this.openDrawer}>
                menu
              </Toolbar.Icon>
              <Toolbar.Title onClick={this.goHome} style={{cursor: "pointer"}}>
                Zed Führen
              </Toolbar.Title>
            </Toolbar.Section>
            <Toolbar.Section align-end onClick={this.openSettings}>
              <Toolbar.Icon>settings</Toolbar.Icon>
            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>
        <Drawer.TemporaryDrawer ref={this.drawerRef}>
          <Drawer.TemporaryDrawerContent>
            <List>
              <List.LinkItem onClick={this.goHome}>
                <List.ItemIcon>home</List.ItemIcon>
                Home
              </List.LinkItem>
              <List.LinkItem onClick={this.goToMain}>
                <List.ItemIcon>extension</List.ItemIcon>
                Main Quests
              </List.LinkItem>
              <List.LinkItem onClick={this.goToTelsa}>
                <List.ItemIcon>flash_on</List.ItemIcon>
                Telsa
              </List.LinkItem>

              <List.LinkItem onClick={this.goToCredits}>
                <List.ItemIcon>mood</List.ItemIcon>
                Credits
              </List.LinkItem>
            </List>
          </Drawer.TemporaryDrawerContent>
        </Drawer.TemporaryDrawer>
        <Dialog ref={this.dialogRef}>
          <Dialog.Header>Settings</Dialog.Header>
          <Dialog.Body>
            <div>
              Enable dark theme <Switch onClick={this.toggleDarkTheme} />
            </div>

            <Button onClick={() => clearStepsProgress()} raised>
              Clear Progress
            </Button>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton accept>okay</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  }
}
