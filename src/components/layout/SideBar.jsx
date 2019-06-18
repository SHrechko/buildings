import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SideBarStore from "../../stores/SideBarStore";
import SideBarActions from "../../actions/SideBarActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import classNames from "classnames";

const styles = theme => ({
  sideBar: {
    width: "250px",
    height: "816px",
    backgroundColor: "#263949"
  },
  listItem: {
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "0"
  },
  menu: {
    width: "auto",
    height: "60px",
    backgroundColor: "#1f2f3d",
    display: "flex",
    paddingLeft: "15px",
    paddingRight: "15px",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.8)"
  },
  txt: {
    fontFamily: "SFProText",
    fontSize: "14px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.86",
    letterSpacing: "0.3px",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "0",
    marginTop: "8px",
    paddingBottom: "12px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
  },
  menuTxt: {
    fontWeight: "500",
    letterSpacing: "0.8px",
    lineHeight: "normal"
  }
});

const list = ["Home page", "Projects", "Contacts", "Log in"];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: SideBarStore.getState().open
    };
  }

  onSideBarChanged = () => {
    this.setState({
      open: SideBarStore.getState().open
    });
  };
  componentDidMount() {
    SideBarStore.on("change", this.onSideBarChanged.bind(this));
  }

  componentWillUnmount() {
    SideBarStore.removeListener("change", this.onSideBarChanged.bind(this));
  }

  toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (!open) {
      SideBarActions.closeSideBar();
    } else {
      SideBarActions.openSideBar();
    }
  };

  sideList = () => (
    <div className={this.props.classes.sideBar}>
      <div className={this.props.classes.menu}>
        <Typography
          className={classNames(
            this.props.classes.menuTxt,
            this.props.classes.txt
          )}
        >
          Main menu
        </Typography>
        <IconButton
          onClick={this.toggleDrawer(false)}
          edge="start"
          size="small"
          color="inherit"
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </div>
      <List
        onClick={this.toggleDrawer(false)}
        onKeyDown={this.toggleDrawer(false)}
        role="presentation"
      >
        {list.map((text, index) => (
          <ListItem className={this.props.classes.listItem} button key={text}>
            <ListItemText
              dense
              disableTypography={true}
              className={this.props.classes.txt}
              primary={text}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={this.toggleDrawer(false)}
        onOpen={this.toggleDrawer(true)}
      >
        {this.sideList()}
      </SwipeableDrawer>
    );
  }
}

export default withStyles(styles)(SideBar);
