import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Places from "../../assets/facebook-places.svg";
import Phone from "../../assets/phone.svg";
import Envelope from "../../assets/envelope.svg";
import ContactFormImg from "../../assets/contactForm.png";

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
    margin: "auto",
    "@media only screen and (max-width: 1023px)": {
      width: "50%"
    },
    "@media only screen and (max-width: 767px)": {
      width: "90%"
    }
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
    textAlign: "center",
    "@media only screen and (max-width: 1023px)": {
      width: "100%"
    },
    "@media only screen and (max-width: 767px)": {
      fontSize: "26px"
    }
  },
  form: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${ContactFormImg})`,
    backgroundPositionX: "center",
    backgroundPositionY: "top",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    boxSizing: "border-box",
    backgroundSize: "cover",
    "@media only screen and (max-width: 1023px)": {
      width: "100%",
      height: "50%"
    }
  },
  formTitle: {
    fontFamily: "SFProText",
    lineHeight: "normal",
    letteSpacing: "0.3px",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: "48px",
    marginBottom: "10px",
    color: "#ffffff",
    "@media only screen and (max-width: 767px)": {
      fontSize: "18px",
      fontWeight: "500"
    }
  },
  textField: {
    width: "290px",
    marginTop: "30px",
    color: "#ffffff",
    "@media only screen and (max-width: 767px)": {
      width: "90%"
    }
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
    fontWeight: "bold",
    "@media only screen and (max-width: 767px)": {
      fontSize: "14px"
    }
  },
  contactInfo: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "@media only screen and (max-width: 1023px)": {
      width: "100%",
      height: "50%"
    }
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
    opacity: "0.8",
    "@media only screen and (max-width: 767px)": {
      fontSize: "14px"
    }
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
  },
  flexBlock: {
    width: "945px",
    height: "500px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    "@media only screen and (max-width: 1023px)": {
      width: "100%",
      flexDirection: "column",
      height: "1000px"
    }
  }
});

const CssTextField = withStyles({
  root: {
    "& label": {
      color: "#ffffff",
      opacity: 0.35,
      letterSpacing: "0.2px",
      fontFamily: "SFProText",
      "@media only screen and (max-width: 767px)": {
        fontSize: "14px"
      }
    },
    "& label.Mui-focused": {
      color: "#ffffff",
      opacity: 1
    },
    "& .MuiInput-underline:after, .MuiInput-underline:before, :hover.MuiInput-underline:before": {
      borderBottomColor: "white"
    },
    "& .MuiInputBase-input": {
      color: "white",
      "@media only screen and (max-width: 767px)": {
        fontSize: "12px"
      }
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
          <div className={classes.flexBlock}>
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
                  <img className={classes.icon} alt="Places" src={Places} />
                  <Typography variant="subtitle2" className={classes.infoTxt}>
                    Runeberginkatu 25, Kotka / Finland
                  </Typography>
                </div>
                <div className={classes.infoItem}>
                  <img className={classes.icon} alt="Phone" src={Phone} />
                  <Typography variant="subtitle2" className={classes.infoTxt}>
                    +358 40 740 22906
                  </Typography>
                </div>
                <div className={classes.infoItem}>
                  <img className={classes.icon} alt="Envelope" src={Envelope} />
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
