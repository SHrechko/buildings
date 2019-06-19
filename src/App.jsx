import React, { Component } from "react";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import NavigationStore from "./stores/NavigationStore";
import { NavigationActionTypes } from "./actions/NavigationActions";
import AppBar from "./components/layout/AppBar";
import SideBar from "./components/layout/SideBar";
import { MuiThemeProvider } from "@material-ui/core";
import Home from "./components/Home/Home";
import AboutUs from "./components/companyInf/AboutUs";
import OurProjects from "./components/companyInf/OurProjects";
import ContactForm from "./components/contactForm/ContactForm";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const styles = () => ({
  project: {
    height: "775px",
    width: "100%",
    position: "absolute",
    top: "64px",
    zIndex: "-1"
  },
  iframe: {
    width: "calc(100% - 4px)",
    height: "100%"
  }
});

const HomePage = () => (
  <React.Fragment>
    <Home />
    <AboutUs />
    <OurProjects />
    <ContactForm />
  </React.Fragment>
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: NavigationStore.getState().currentPage,
      projectId: NavigationStore.getState().projectId
    };
  }

  onNavigationChanged = () => {
    this.setState({
      currentPage: NavigationStore.getState().currentPage,
      projectId: NavigationStore.getState().projectId
    });
  };
  componentDidMount() {
    NavigationStore.on("change", this.onNavigationChanged);
  }

  componentWillUnmount() {
    NavigationStore.removeListener("change", this.onNavigationChanged);
  }

  render() {
    const { currentPage, projectId } = this.state;
    const { classes } = this.props;
    let currentPageComponent = null;
    let homePage = null;
    let showIframe = false;
    switch (currentPage) {
      case NavigationActionTypes.HOME:
        currentPageComponent = <HomePage />;
        homePage = true;
        break;
      case NavigationActionTypes.PROJECTS:
        currentPageComponent = <HomePage />;
        break;
      case NavigationActionTypes.PROJECT:
        if (projectId !== null) {
          showIframe = true;
          currentPageComponent = <Project projectId={projectId} />;
        }
        break;
      case NavigationActionTypes.CONTACTS:
        currentPageComponent = <HomePage />;
        break;
      case NavigationActionTypes.LOG_IN:
        currentPageComponent = <HomePage />;
        break;
      default:
        currentPageComponent = <HomePage />;
        homePage = true;
        break;
    }
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar home={homePage ? true : false} />
        <SideBar />
        {currentPageComponent}
        <Footer home={homePage ? true : false} />
        <div
          className={classes.project}
          style={{ display: showIframe ? "" : "none" }}
        >
          <iframe
            title="Projects"
            className={classes.iframe}
            scrolling="no"
            src="http://ebuildings.eu/building_test_5/index.html"
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
