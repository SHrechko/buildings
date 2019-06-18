import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import HomeBg from "../../assets/home_bg.jpg";
import HomeBg2 from "../../assets/home_bg@2x.jpg";
import HomeBg3 from "../../assets/home_bg@3x.jpg";
import HomeBitmap from "../../assets/home_bitmap.jpg";
import HomeBitmap2 from "../../assets/home_bitmap@2x.jpg";
import HomeBitmap3 from "../../assets/home_bitmap@3x.jpg";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BitmapSmall from "../../assets/bitmap@2x.jpg";

const styles = theme => ({
  home: {
    paddingBottom: "137px",
    backgroundImage: `url(${HomeBg})`,
    backgroundPositionY: "top",
    backgroundPositionX: "center",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    boxSizing: "boder-box",
    backgroundSize: "cover",
    margin: "0",
    "& *": {
      color: "#ffffff",
      fontFamily: "SFProText",
      fontStyle: "normal",
      fontStretch: "normal"
    },
    "@media only screen and (-moz-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)": {
      backgroundImage: `url(${HomeBg2})`
    },
    "@media only screen and (-moz-min-device-pixel-ratio: 3), only screen and (-o-min-device-pixel-ratio: 3/1), only screen and (-webkit-min-device-pixel-ratio: 3), only screen and (min-device-pixel-ratio: 3)": {
      backgroundImage: `url(${HomeBg3})`
    },
    "@media only screen and (max-width: 767px)": {
      paddingBottom: "90px"
    }
  },
  headBlock: {
    display: "inline-block",
    marginTop: "154px",
    width: "calc(100% - 300px)",
    marginLeft: "150px",
    marginRight: "150px",
    position: "relative",
    "@media only screen and (max-width: 1439px)": {
      marginTop: "120px",
      marginLeft: "120px",
      marginRight: "100px",
      width: "calc(100% - 250px)"
    },
    "@media only screen and (min-width: 768px) and (max-width: 1023px)": {
      marginRight: "70px",
      width: "calc(100% - 190px)"
    },
    "@media only screen and (max-width: 767px)": {
      marginRight: "15px",
      marginTop: "80px",
      marginLeft: "15px",
      width: "calc(100% - 30px)"
    }
  },
  title: {
    maxWidth: "701px",
    margin: "0 390px 120px 0",
    fontSize: "80px",
    lineHeight: "1.38",
    letterSpacing: "0.3px",
    fontWeight: "900",
    "@media only screen and (max-width: 1439px)": {
      marginBottom: "80px",
      marginRight: "160px",
      fontSize: "60px"
    },
    "@media only screen and (max-width: 1023px)": {
      marginBottom: "60px",
      marginRight: "30px",
      fontSize: "60px",
      maxWidth: "500px"
    },
    "@media only screen and (max-width: 767px)": {
      fontSize: "50px",
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: "290px"
    }
  },
  subtitle: {
    maxWidth: "457px",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.63",
    letterSpacing: "0.6px",
    marginBottom: "125px",
    "@media only screen and (max-width: 1439px)": {
      fontSize: "14px"
    },
    "@media only screen and (max-width: 1023px)": {
      maxWidth: "280px"
    },
    "@media only screen and (max-width: 767px)": {
      fontSize: "12px",
      marginBottom: "280px",
      marginRight: "auto",
      marginLeft: "auto"
    }
  },
  button: {
    borderRadius: "0",
    borderColor: "#ffffff",
    marginBottom: "39px",
    "@media only screen and (max-width: 767px)": {
      marginBottom: "0",
      marginLeft: "auto",
      marginRight: "auto",
      display: "block"
    }
  },
  textButton: {
    textTransform: "uppercase",
    fontSize: "16px",
    letterSpacing: "2.7px",
    fontWeight: "bold",
    lineHeight: "normal",
    letterSpacing: "2.7px"
  },
  smallBitmap: {
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "390px",
    height: "431px",
    objectFit: "contain",
    "@media only screen and (min-width: 1024px) and (max-width: 1439px)": {
      width: "312px",
      height: "351px"
    },
    "@media only screen and (max-width: 1023px)": {
      width: "260px",
      height: "290px"
    },
    "@media only screen and (max-width: 767px)": {
      width: "195px",
      height: "220px",
      bottom: "70px",
      right: "50%",
      transform: "translate(50%, 0)"
    }
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home}>
        <div className={classes.headBlock}>
          <div className={classes.title}>3D map models of apartments</div>
          <div className={classes.subtitle}>
            We trying to show the most reality buildings created in 3d editors
            from real draws
          </div>
          <Button size="large" variant="outlined" className={classes.button}>
            <Typography classes={classes.textButton}>
              TRY IT FOR FREE
            </Typography>
          </Button>
          <img
            src={HomeBitmap}
            srcset={`${HomeBitmap2}, ${HomeBitmap3}`}
            className={classes.smallBitmap}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
