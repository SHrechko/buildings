import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBarUi from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/FormatAlignRight";
import Logo from "../../assets/logo-e.svg";
import NavigationActions from "../../actions/NavigationActions";
import SideBarActions from "../../actions/SideBarActions";
import SideBarStore from "../../stores/SideBarStore";

const styles = theme => ({
  appBar: {
    height: "60px ",
    width: "auto"
  },
  root: {
    flexGrow: 1
  },
  logo: {
    flexGrow: 1,
    "& > div": {
      background: `url(${Logo}) no-repeat`,
      backgroundPositionY: "top",
      backgroundPositionX: "left",
      backgroundRepeat: "no-repeat",
      backgroundRepeatX: "no-repeat",
      backgroundRepeatY: "no-repeat",
      boxSizing: "boder-box",
      height: "33px",
      cursor: "pointer"
    }
  }
});

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false
    };
  }

  openCloseSideBar = () => {
    if (this.state.sideBar) {
      SideBarActions.closeSideBar();
    } else {
      SideBarActions.openSideBar();
    }

    this.setState(state => ({
      sideBar: !state.sideBar
    }));
  };

  onSideBarChanged = () => {
    this.setState({
      sideBar: SideBarStore.getState().open
    });
  };
  componentDidMount() {
    SideBarStore.on("change", this.onSideBarChanged.bind(this));
  }

  componentWillUnmount() {
    SideBarStore.removeListener("change", this.onSideBarChanged.bind(this));
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBarUi
          position={this.props.home ? "absolute" : "static"}
          style={
            this.props.home
              ? {
                  boxShadow: "none",
                  background: "rgba(0, 0, 0, 0)"
                }
              : {
                  background:
                    "linear-gradient(to right, #1b2733 0%, #283c4d 100%)"
                }
          }
        >
          <Toolbar>
            <div className={classes.logo}>
              <div onClick={NavigationActions.openHome} />
            </div>
            <IconButton
              onClick={this.openCloseSideBar}
              edge="start"
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBarUi>
      </div>
    );
  }
}

export default withStyles(styles)(AppBar);
