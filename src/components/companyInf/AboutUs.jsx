import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import HomeBitmap from "../../assets/home_bitmap.jpg";
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
    }
  },
  conteiner: {
    maxWidth: "1290px",
    height: "314px",
    display: "flex",
    flexDirection: "row"
  },
  image: {
    width: "555px",
    height: "auto",
    marginRight: "auto"
  },
  infBlock: {
    width: "390px",
    margin: "auto 0",
    marginLeft: "127px",
    display: "flex",
    flexDirection: "column",
    height: "max-content"
  },
  infBlockTitle: {
    width: "auto",
    fontSize: "32px",
    fontWeight: "900",
    lineHeight: "normal",
    letterSpacing: "0.2px",
    textTransform: "uppercase",
    marginBottom: "82px"
  },
  infBlockTxt: {
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: "1.63",
    letterSpacing: "0.6px"
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
          <img src={HomeBitmap} className={classes.image} />
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
