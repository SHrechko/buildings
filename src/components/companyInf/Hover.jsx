import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NavigationActions from "../../actions/NavigationActions";

const styles = theme => ({
  hover: {
    position: "relative",

    "&:hover > .hover__no-hover": {
      opacity: 1
    },

    "&:hover > .hover__hover": {
      opacity: 1
    },

    "& > .hover__hover": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "330px",
      opacity: 0
    },

    "& > .hover__no-hover": {
      opacity: 1,
      width: "100%"
    }
  },
  bgBlack: {
    backgroundColor: "black",
    opacity: 0.4,
    width: "100%",
    height: "100%"
  },
  button: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 0,
    border: "2px solid #e94a4a",
    height: "50px",
    width: "224px",
    padding: "0 20px",
    "&:hover": {
      backgroundColor: "#e94a4a"
    }
  },
  buttonTxt: {
    color: "#ffffff",
    fontFamily: "SFProText",
    letterSpacing: "2.7px"
  }
});

const Hover = withStyles(styles)(({ projectId, children, classes }) => (
  <div className={classes.hover}>
    <div className="hover__no-hover">{children}</div>
    <div className="hover__hover">
      <div className={classes.bgBlack} />
      <Button
        onClick={() => NavigationActions.openProject(projectId)}
        className={classes.button}
      >
        <Typography variant="h6" className={classes.buttonTxt}>
          View Project
        </Typography>
      </Button>
    </div>
  </div>
));
export default withStyles(styles)(Hover);
