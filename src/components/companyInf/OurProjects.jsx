import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hover from "./Hover";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

import Group2_1 from "../../assets/group-9.jpg";
import Group2_2 from "../../assets/group-9@2x.jpg";
import Group2_3 from "../../assets/group-9@3x.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = theme => ({
  ourProjects: {
    backgroundColor: "#ffffff",
    overflow: "hidden"
  },
  content: {
    maxWidth: "1440px",
    width: "auto",
    margin: "0 auto 164px",
    "@media only screen and (max-width: 767px)": {
      marginBottom: "80px"
    }
  },
  headBlock: {
    width: "auto",
    height: "max-content",
    display: "flex",
    flexDiirection: "row",
    alignItems: "center",
    marginBottom: "50px",
    padding: "0 30px",
    "@media only screen and (max-width: 424px)": {
      padding: "0 15px"
    }
  },
  title: {
    width: "auto",
    fontFamily: "SFProText",
    fontSize: "32px",
    fontWeight: "900",
    lineHeight: "normal",
    letterSpacing: "0.2px",
    textTransform: "uppercase",
    flexGrow: 1,
    "@media only screen and (max-width: 450px)": {
      fontSize: "28px",
      fontWeight: "700"
    }
  },
  slickItem: {
    width: "360px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    "@media only screen and (max-width: 1149px)": {
      width: "300px"
    },
    "@media only screen and (max-width: 1023px)": {
      width: "340px"
    },
    "@media only screen and (max-width: 449px)": {
      width: "320px"
    }
  },
  img: {
    width: "100%",
    height: "330px",
    marginBottom: "45px",
    "@media only screen and (max-width: 1149px)": {
      height: "auto"
    }
  },
  itemName: {
    width: "190px",
    height: "24px",
    opacity: "0.9",
    fontFamily: "SFProText",
    fontSize: "20px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.7px",
    textAlign: "center",
    color: "#38414c",
    margin: "0 auto",
    "@media only screen and (max-width: 449px)": {
      fontSize: "18px"
    }
  },
  slide: {
    width: "100%",
    outline: "none"
  },
  arrow: {
    marginRight: "15px"
  },
  carousel: {
    width: "1130px",
    marginLeft: "auto",
    marginRight: "auto",
    "@media only screen and (max-width: 1149px)": {
      width: "1000px"
    },
    "@media only screen and (max-width: 1023px)": {
      width: "780px"
    },
    "@media only screen and (max-width: 767px)": {
      width: "auto"
    }
  }
});

const sliderItems = [
  {
    id: 0,
    img: Group2_1,
    img2: Group2_2,
    img3: Group2_3,
    name: "HOUSE Project 01"
  },
  {
    id: 1,
    img: Group2_1,
    img2: Group2_2,
    img3: Group2_3,
    name: "HOUSE Project 01"
  },
  {
    id: 2,
    img: Group2_1,
    img2: Group2_2,
    img3: Group2_3,
    name: "HOUSE Project 01"
  },
  {
    id: 3,
    img: Group2_1,
    img2: Group2_2,
    img3: Group2_3,
    name: "HOUSE Project 01"
  }
];

class OurProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  // mouseoverFunc =() => {

  // }

  // mouseoutFunc =() => {

  // }

  // componentDidMount() {
  //   for(let i=0; i<sliderItems.length; i++) {
  //     document.getElementsByClassName(this.props.classes.img)[i].addEventListener('mouseover', this.mouseoverFunc);
  //     document.getElementsByClassName(this.props.classes.img)[i].addEventListener('mouseout', this.mouseoutFunc);
  //   }
  // }

  // componentWillUnmount() {
  //   for(let i=0; i<sliderItems.length; i++) {
  //     document.getElementsByClassName(this.props.classes.img)[i].removeEventListener('mouseover', this.mouseoverFunc);
  //     document.getElementsByClassName(this.props.classes.img)[i].removeEventListener('mouseout', this.mouseoutFunc);
  //   }
  // }

  next() {
    this.slider.slickNext();
    this.setState({
      showTab: 0
    });
  }
  previous() {
    this.slider.slickPrev();
    this.setState({
      showTab: 0
    });
  }

  render() {
    const { classes } = this.props;

    var settings = {
      adaptiveHeight: true,
      className: classes.carousel,
      centerMode: false,
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <div className={classes.ourProjects}>
        <div className={classes.content}>
          <div className={classes.headBlock}>
            <div className={classes.title}>Our Projects</div>
            <Fab
              className={classes.arrow}
              color="secondary"
              size="small"
              aria-label="Edit"
              onClick={this.previous}
            >
              <Icon>keyboard_arrow_left</Icon>
            </Fab>
            <Fab
              color="secondary"
              size="small"
              aria-label="Edit"
              onClick={this.next}
            >
              <Icon>keyboard_arrow_right</Icon>
            </Fab>
          </div>
          <Slider
            className={classes.carousel}
            ref={c => (this.slider = c)}
            {...settings}
          >
            {sliderItems.map(item => (
              <div className={classes.slide} key={item.id}>
                <div className={classes.slickItem}>
                  <Hover projectId={item.id}>
                    <img
                      alt={`project${item.id}`}
                      className={classes.img}
                      src={item.img}
                      srcSet={`${item.img2}, ${item.img3}`}
                    />
                  </Hover>
                  <Typography className={classes.itemName}>
                    {item.name}
                  </Typography>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(OurProjects);
