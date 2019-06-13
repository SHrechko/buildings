import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationStore from "./stores/NavigationStore";
import { NavigationActionTypes } from "./actions/NavigationActions";
import AppBar from "./components/layout/AppBar";
import SideBar from "./components/layout/SideBar";
import { MuiThemeProvider } from "@material-ui/core";
import mainTheme from "./themes/mainTheme";
import Home from "./components/Home/Home";
import AboutUs from "./components/companyInf/AboutUs";
import OurProjects from "./components/companyInf/OurProjects";
import ContactForm from "./components/contactForm/ContactForm";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";

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
    let currentPageComponent = null;
    let homePage = null;
    switch (currentPage) {
      case NavigationActionTypes.HOME:
        currentPageComponent = <HomePage />;
        homePage = true;
        break;
      case NavigationActionTypes.PROJECTS:
        currentPageComponent = <HomePage />;
        break;
      case NavigationActionTypes.PROJECT:
        console.log(projectId + ", " + projectId !== null);
        if (projectId !== null) {
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
      <MuiThemeProvider>
        <AppBar home={homePage ? true : false} />
        <SideBar />
        {currentPageComponent}
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
