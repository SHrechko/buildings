import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AboutUsImage from "../../assets/AboutUsImage.jpg";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  aboutUs: {
    background: "#ffffff",
    padding: "162px 151px 145px",
    "& *": {
      fontFamily: "SFProText",
      fontStyle: "normal",
      fontStretch: "normal",
      color: "#38414c"
    },
    "@media only screen and (max-width: 1023px)": {
      padding: "162px 100px 145px"
    },
    "@media only screen and (max-width: 767px)": {
      padding: "102px 20px 85px"
    }
  },
  conteiner: {
    maxWidth: "1290px",
    height: "314px",
    display: "flex",
    flexDirection: "row",
    "@media only screen and (mix-width: 768px) and (max-width: 1023px)": {
      height: "250px"
    },
    "@media only screen and (max-width: 767px)": {
      display: "flex",
      flexDirection: "column",
      height: "max-content",
      width: "auto",
      margin: "0 auto",
      maxWidth: "300px"
    }
  },
  image: {
    width: "555px",
    height: "auto",
    "@media only screen and (min-width: 768px) and (max-width: 1023px)": {
      width: "400px"
    },
    "@media only screen and (max-width: 767px)": {
      width: "auto",
      marginRight: "0",
      maxWidth: "100%",
      marginBottom: "30px",
      height: "auto"
    }
  },
  infBlock: {
    width: "390px",
    margin: "auto 0",
    marginLeft: "127px",
    display: "flex",
    flexDirection: "column",
    height: "max-content",
    "@media only screen and (max-width: 1023px)": {
      marginLeft: "70px"
    },
    "@media only screen and (max-width: 767px)": {
      maxWidth: "390px",
      width: "100%",
      marginLeft: "0"
    }
  },
  infBlockTitle: {
    width: "auto",
    fontSize: "32px",
    fontWeight: "900",
    lineHeight: "normal",
    letterSpacing: "0.2px",
    textTransform: "uppercase",
    marginBottom: "82px",
    "@media only screen and (max-width: 1023px)": {
      fontSize: "28px",
      marginBottom: "60px"
    },
    "@media only screen and (max-width: 767px)": {
      marginBottom: "20px"
    }
  },
  infBlockTxt: {
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: "1.63",
    letterSpacing: "0.6px",
    "@media only screen and (max-width: 1023px)": {
      fontSize: "14px"
    }
  }
});

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.aboutUs}>
        <div className={classes.conteiner}>
          <img src={AboutUsImage} alt="Home Bitmap" className={classes.image} />
          <div className={classes.infBlock}>
            <Typography className={classes.infBlockTitle}>
              We creating
            </Typography>
            <Typography className={classes.infBlockTxt}>
              We trying to show you the most reality buildings, created in 3D
              editors from real draws. With our service you can see the project
              between buildings from real map.
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutUs);
