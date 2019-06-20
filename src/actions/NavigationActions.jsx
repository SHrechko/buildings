import NavigationDispatcher from "../data/NavigationDispatcher";

export const NavigationActionTypes = {
  HOME: "HOME",
  PROJECTS: "PROJECTS",
  PROJECT: "PROJECT",
  TRYIT: "TRYIT",
  CONTACTS: "CONTACTS",
  LOG_IN: "LOG_IN"
};

const Actions = {
  openHome() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.HOME
    });
  },
  openProjects() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.PROJECTS
    });
  },
  openProject(projectId) {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.PROJECT,
      id: projectId
    });
  },
  openTryIt() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.TRYIT
    });
  },
  openContacts() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.CONTACTS
    });
  },
  openLogIn() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.LOG_IN
    });
  }
};

export default Actions;
