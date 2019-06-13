import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Places from "../../assets/facebook-places.svg";
import Phone from "../../assets/phone.svg";
import Envelope from "../../assets/envelope.svg";

const styles = theme => ({
  contactForm: {
    backgroundImage: "radial-gradient(circle at 65% 0, #2c384e, #0d1d2e)",
    width: "auto",
    minHeight: "820px",
    "& > *": {
      fontStyle: "normal",
      fontStretch: "normal",
      fontFamily: "SFProText"
    }
  },
  conteiner: {
    width: "max-content",
    margin: "auto"
  },
  title: {
    display: "inline-block",
    margin: "84px 0",
    lineHeight: "normal",
    letteSpacing: "0.2px",
    textTransform: "uppercase",
    color: "#ffffff",
    fontFamily: "SFProText",
    width: "50%",
    textAlign: "center"
  },
  form: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "gray"
  },
  formTitle: {
    fontFamily: "SFProText",
    lineHeight: "normal",
    letteSpacing: "0.3px",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: "48px",
    marginBottom: "10px",
    color: "#ffffff"
  },
  textField: {
    width: "290px",
    marginTop: "30px"
  },
  submit: {
    textTransform: "uppercase",
    padding: "14px 51px",
    border: "none",
    borderRadius: "0",
    backgroundColor: "#e94a4a",
    color: "#ffffff",
    marginTop: "68px"
  },
  buttonText: {
    fontFamily: "SFProText",
    letterSpacing: "2.7px",
    fontWeight: "bold"
  },
  contactInfo: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  infoItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  infoTxt: {
    fontSize: "16px",
    lineHeight: "1.63",
    letterSpacing: "0.3px",
    color: "#363e48",
    marginLeft: "21px",
    width: "180px",
    opacity: "0.8"
  },
  icon: {
    width: "25px",
    height: "34px",
    objectFit: "contain"
  },
  infoContainer: {
    display: "table",
    "& > div:not(:last-child)": {
      marginBottom: "44px"
    }
  }
});

const CssTextField = withStyles({
  root: {
    "& label": {
      color: "#ffffff",
      opacity: 0.35,
      letterSpacing: "0.2px",
      fontFamily: "SFProText"
    },
    "& label.Mui-focused": {
      color: "#ffffff",
      opacity: 1
    },
    "& .MuiInput-underline:after, .MuiInput-underline:before, :hover.MuiInput-underline:before": {
      borderBottomColor: "white"
    }
  }
})(TextField);

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.contactForm}>
        <div className={classes.conteiner}>
          <Typography className={classes.title} variant="h4">
            GET IN TOUCH
          </Typography>
          <div
            style={{
              width: "945px",
              height: "500px",
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "row"
            }}
          >
            <div className={classes.form}>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.formTitle}
              >
                Fill the form
              </Typography>
              <CssTextField
                id="standard-dense"
                label="Write your full name"
                className={classes.textField}
                margin="dense"
              />
              <CssTextField
                id="standard-dense"
                label="Write your email address"
                className={classes.textField}
                margin="dense"
              />
              <CssTextField
                id="standard-dense"
                label="Message"
                className={classes.textField}
                margin="dense"
              />
              <Button
                size="large"
                variant="outlined"
                className={classes.submit}
              >
                <Typography className={classes.buttonText}>Apply</Typography>
              </Button>
            </div>
            <div className={classes.contactInfo}>
              <div className={classes.infoContainer}>
                <div className={classes.infoItem}>
                  <img className={classes.icon} src={Places} />
                  <Typography variant="subtitle2" className={classes.infoTxt}>
                    Runeberginkatu 25, Kotka / Finland
                  </Typography>
                </div>
                <div className={classes.infoItem}>
                  <img className={classes.icon} src={Phone} />
                  <Typography variant="subtitle2" className={classes.infoTxt}>
                    +358 40 740 22906
                  </Typography>
                </div>
                <div className={classes.infoItem}>
                  <img className={classes.icon} src={Envelope} />
                  <Typography variant="subtitle2" className={classes.infoTxt}>
                    info@tuned.rocks
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ContactForm);
