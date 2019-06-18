import React, { Component } from "react";
import ReactDom from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Sync from "@material-ui/icons/Sync";
import ScrollArea from "react-scrollbar";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import ResizeIcon from "../../assets/resize.svg";

import Plan from "../../assets/plan.jpg";
import PLan2 from "../../assets/plan@2x.jpg";
import Plan3 from "../../assets/plan@3x.jpg";

import classNames from "classnames";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = theme => ({
  project: {
    height: "775px",
    width: "100%",
    backgroundColor: "gray",
    position: "relative"
  },
  chat: {
    width: "405px",
    maxHeight: "705px",
    height: "705px",
    position: "absolute",
    top: "30px",
    right: "29px",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  },
  resizeButton: {
    position: "absolute",
    top: "689px",
    right: "464px"
  },
  resize: {
    marginTop: "-7px",
    width: "36px",
    height: "45px",
    backgroundImage: `url(${ResizeIcon})`,
    backgroundPositionY: "top",
    backgroundPositionX: "center",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    boxSizing: "boder-box"
  },
  appBarChat: {
    margin: 0,
    height: "60px",
    boxShadow: "0 0 34px 0 rgba(0, 0, 0, 0.12)",
    backgroundImage: "linear-gradient(272deg, #283c4d, #1b2733)",
    paddingLeft: "5px"
  },
  appBarItem: {
    display: "flex",
    float: "left",
    height: "100%",
    color: "#ffffff",
    marginRight: "15px"
  },
  appBarTxt: {
    opacity: "0.5",
    fontFamily: "SFProText",
    fontSize: "12px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.8px",
    color: "#ffffff"
  },

  grid: {
    height: "80px",
    overflow: "hidden",
    marginTop: "0"
  },
  gridStars: {
    marginTop: "auto",
    height: "max-content",
    padding: "0 15px",
    backgroundColor: "#50575e"
  },
  avatar: {
    marginRight: "15px",
    marginTop: "8px"
  },
  closeVoting: {
    marginLeft: "auto",
    color: "rgba(255, 255, 255, 0.85)",
    float: "right"
  },
  collapse: {
    width: "100%"
  },
  votingBlock: {
    height: "45px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  closedVotingTxt: {
    marginRight: "auto",
    display: "inline-block",
    letterSpacing: "0.6px",
    opacity: "0.85"
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: "max-content"
  },
  scrollArea: {
    margin: "32px 0 0 16px",
    height: "475px",
    width: "calc(100% - 25px)",
    "& .scrollbar-container.vertical": {
      opacity: "1 !important"
    }
  },
  message: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    marginRight: "17px",
    "&:not(:first-child)": {
      paddingTop: "15px"
    },
    "&:not(:last-child)": {
      paddingBottom: "15px",
      borderBottom: "1px solid rgba(0, 0, 0, 0.08)"
    }
  },
  nameDate: {
    "& *": {
      display: "inline-block",
      opacity: "0.3",
      fontFamily: "SFProText",
      fontSize: "12px",
      fontWeight: 300,
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "normal",
      letterSpacing: "0.6px",
      color: "#000000"
    }
  },
  messageName: {
    opacity: 1,
    fontWeight: "500",
    color: "#d74646",
    marginRight: "15px"
  },
  messageTxt: {
    opacity: "0.7",
    fontFamily: "SFProText",
    fontSize: "14px",
    marginTop: "5px",
    marginBottom: "11px"
  },
  reply: {
    display: "table",
    cursor: "pointer",
    opacity: "0.3",
    fontFamily: "SFProText",
    fontSize: "12px",
    fontWeight: "300",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.5",
    letterSpacing: "0.6px",
    color: "#000000"
  },
  sliderImg: {
    maxWidth: "616px",
    maxHeight: "326px"
  },
  carousel: {
    maxWidth: "716px",
    "& .slick-prev:before, .slick-next:before": {
      color: "#000000"
    }
  },
  closeBlock: {
    width: "auto",
    position: "relative"
  },
  closePlan: {
    color: "#000000",
    float: "right"
  },
  sync: {
    color: "#ffffff",
    float: "right",
    height: "30px",
    width: "30px",
    margin: "auto 0"
  },
  dialog: {
    padding: "20px"
  },
  sliderItem: {
    display: "flex !important",
    justifyContent: "center",
    outline: "none"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    flexGrow: "1"
  },
  star: {
    backgroundColor: "rgba(255, 255, 255, 0) !important",
    width: "30px",
    height: "30px",
    maxHeight: "30px",
    minHeight: "30px",
    boxShadow: "none",
    color: "rgba(255, 255, 255, 0.85)",
    "& .MuiFab-label": {
      width: "30px",
      height: "30px"
    }
  }
});

const CssTextField = withStyles({
  root: {
    "& *": {
      fontSize: "12px"
    },
    "& div.MuiInputBase-root": {
      padding: "12px 16px",
      width: "318px"
    },
    "& > label": {
      opacity: "0.32",
      fontFamily: "HiraginoSansGB-W3",
      fontSize: "14px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "normal",
      letterSpacing: "0.3px",
      color: "#000000"
    },
    "& label.Mui-focused": {
      opacity: 1
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-marginDense": {
      transform: "translate(10px, 13px) scale(1)"
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)"
    }
  }
})(TextField);

const messages = [
  {
    id: 0,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  },
  {
    id: 1,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  },
  {
    id: 2,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  },
  {
    id: 3,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  },
  {
    id: 4,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  },
  {
    id: 5,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  },
  {
    id: 6,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  },
  {
    id: 7,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  },
  {
    id: 8,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  },
  {
    id: 9,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  },
  {
    id: 10,
    name: "Julian Gruber",
    time: "2 days ago",
    text:
      "I think this work is so beautiful, nice design of apartment building!"
  }
];

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: this.props.projectId,
      voted: true,
      openPlan: false,
      stars: true,
      starIndex: null
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { classes } = this.props;
    const { projectId, voted, openPlan, stars, starIndex } = this.state;

    const settings = {
      adaptiveHeight: true,
      className: classes.carousel,
      centerMode: false,
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className={classes.project}>
        {projectId} Project
        <Dialog
          classes={classes.dialog}
          fullWidth={false}
          maxWidth={true}
          open={openPlan}
          onClose={() => this.setState({ openPlan: false })}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogContent
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px 50px"
            }}
          >
            <div className={classes.closeBlock}>
              <IconButton
                onClick={() => this.setState({ openPlan: false })}
                className={classNames(classes.closeVoting, classes.closePlan)}
                edge="start"
                size="small"
                color="inherit"
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <Slider {...settings}>
              <div className={classes.sliderItem}>
                <img
                  src={Plan}
                  className={classes.sliderImg}
                  srcset={`${PLan2}, ${Plan3}`}
                />
              </div>
              <div className={classes.sliderItem}>
                <img
                  src={Plan}
                  className={classes.sliderImg}
                  srcset={`${PLan2}, ${Plan3}`}
                />
              </div>
              <div className={classes.sliderItem}>
                <img
                  src={Plan}
                  className={classes.sliderImg}
                  srcset={`${PLan2}, ${Plan3}`}
                />
              </div>
            </Slider>
          </DialogContent>
        </Dialog>
        <div className={classes.chat}>
          <ul className={classes.appBarChat}>
            <li className={classes.appBarItem}>
              <Button onClick={() => this.setState({ openPlan: true })}>
                <Typography className={classes.appBarTxt}>
                  Floor plan
                </Typography>
              </Button>
            </li>
            <li className={classes.appBarItem}>
              <Button>
                <Typography className={classes.appBarTxt}>
                  Point of interest
                </Typography>
              </Button>
            </li>
            <li className={classes.appBarItem}>
              <Button>
                <Typography className={classes.appBarTxt}>FAQ</Typography>
              </Button>
            </li>
            <li className={classes.appBarItem}>
              <IconButton
                onClick={() => {}}
                className={classNames(classes.closeVoting, classes.sync)}
                edge="start"
                size="small"
                color="inherit"
                aria-label="close"
              >
                <Sync />
              </IconButton>
            </li>
          </ul>
          <ScrollArea
            className={classes.scrollArea}
            vertical={true}
            contentClassName="content"
            smoothScrolling={true}
            focusableTabIndex={1}
            horizontal={true}
            speed={1}
            verticalContainerStyle={{
              width: "2px",
              overflow: "visible",
              right: "2px",
              borderRadius: "2px",
              backgroundColor: "#e8e8e8"
            }}
            verticalScrollbarStyle={{
              marginLeft: "-1px",
              backgroundColor: "#e94a4a",
              width: "4px",
              borderRadius: "2px",
              opacity: "1"
            }}
          >
            <div className="content">
              {messages.map(message => (
                <div className={classes.message} key={message.id}>
                  <Avatar alt="Remy Sharp" src="#" className={classes.avatar} />
                  <div className={classes.messageContainer}>
                    <div className={classes.nameDate}>
                      <Typography
                        variant="body2"
                        className={classes.messageName}
                      >
                        {message.name}
                      </Typography>
                      <Typography variant="caption">{message.time}</Typography>
                    </div>
                    <Typography className={classes.messageTxt} variant="body2">
                      {message.text}
                    </Typography>
                    <div className={classes.reply}>Reply</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <Grid
            className={classNames(classes.grid, classes.gridStars)}
            container
            alignItems="center"
          >
            <Collapse
              className={classes.collapse}
              in={voted}
              timeout="auto"
              unmountOnExit
            >
              <div className={classes.votingBlock}>
                {stars ? (
                  <div className={classes.stars}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <Fab
                        key={star}
                        className={classes.star}
                        color="inherit"
                        size="small"
                        onClick={() => this.setState({ stars: false })}
                        onMouseEnter={() => this.setState({ starIndex: star })}
                        onMouseLeave={() => this.setState({ starIndex: null })}
                      >
                        {starIndex && star <= starIndex ? (
                          <Icon>star</Icon>
                        ) : (
                          <Icon>star_border</Icon>
                        )}
                      </Fab>
                    ))}
                  </div>
                ) : (
                  <Typography
                    className={classNames(
                      classes.closedVotingTxt,
                      classes.appBarTxt
                    )}
                  >
                    Thank you for your rating!
                  </Typography>
                )}

                <IconButton
                  onClick={() =>
                    this.setState(state => ({ voted: !state.voted }))
                  }
                  className={classes.closeVoting}
                  edge="start"
                  size="small"
                  color="inherit"
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </Collapse>
          </Grid>
          <Grid
            className={classes.grid}
            container
            justify="center"
            alignItems="center"
          >
            <Avatar alt="Remy Sharp" src="#" className={classes.avatar} />
            <CssTextField
              inputProps={{ padding: "2px 5px" }}
              id="outlined-dense-multiline"
              label="Join the community"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
              multiline
              rowsMax="3"
            />
          </Grid>
        </div>
        <IconButton size="medium" className={classes.resizeButton}>
          <div className={classes.resize} />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(Project);
