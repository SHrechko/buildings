import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Logo from "../../assets/logo-e.svg";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  footer: {
    height: "408px",
    backgroundColor: "#171f2a",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& *": {
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      fontFamily: "SFProText",
      color: "#ffffff"
    }
  },
  logo: {
    margin: "84px auto 59px",
    maxWidth: "170px",
    width: "auto",
    height: "48px"
  },
  links: {
    padding: "0",
    margin: "0",
    display: "table",
    "& > *": {
      display: "inline",
      letterSpacing: "0.4px",
      lineHeight: "normal",
      opacity: "0.7",
      "&:not(:last-child)": {
        marginRight: "40px"
      }
    }
  },
  txt: {
    maxWidth: "361px",
    marginTop: "74px",
    fontSize: "14px",
    letterSpacing: "0.5px",
    lineHeight: "1.71",
    opacity: "0.7",
    textAlign: "center"
  }
});

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <img src={Logo} className={classes.logo} />
        <div className={classes.links}>
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">3D Visual</Typography>
          <Typography variant="body1">Projects</Typography>
          <Typography variant="body1">Contacts</Typography>
        </div>
        <Typography className={classes.txt} variant="body1">
          SEO text. Some features about company and other main information.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
