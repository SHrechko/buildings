import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Logo from "../../assets/logo-e.svg";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Inst from "../../assets/instagram.svg";
import Fb from "../../assets/facebook.svg";

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
      },
      "@media only screen and (max-width: 767px)": {
        fontSize: "14px"
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
    textAlign: "center",
    "@media only screen and (max-width: 767px)": {
      fontSize: "12px"
    }
  },
  socialBlock: {
    height: "60px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101a22"
  },
  img: {
    objectFit: "contain",
    opacity: 0.5,
    "&:first-child": {
      marginRight: "13px"
    }
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
      <React.Fragment>
        <div
          className={classes.footer}
          style={!this.props.home ? { height: "159px" } : {}}
        >
          <img
            alt="Logo"
            src={Logo}
            className={classes.logo}
            style={
              !this.props.home
                ? { marginBottom: "20px", marginTop: "28px", opacity: 0.5 }
                : {}
            }
          />
          {this.props.home && (
            <div className={classes.links}>
              <Typography variant="body1">Home</Typography>
              <Typography variant="body1">3D Visual</Typography>
              <Typography variant="body1">Projects</Typography>
              <Typography variant="body1">Contacts</Typography>
            </div>
          )}
          <Typography
            className={classes.txt}
            variant="body1"
            style={!this.props.home ? { marginTop: "0", opacity: 0.5 } : {}}
          >
            SEO text. Some features about company and other main information.
          </Typography>
        </div>
        {!this.props.home && (
          <div className={classes.socialBlock}>
            <div>
              <IconButton size="small" className={classes.img}>
                <img src={Inst} alt="Instagram" />
              </IconButton>
              <IconButton size="small" className={classes.img}>
                <img src={Fb} alt="Facebook" />
              </IconButton>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Footer);
