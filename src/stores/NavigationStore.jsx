import { NavigationActionTypes } from "../actions/NavigationActions";
import NavigationDispatcher from "../data/NavigationDispatcher";
import EventEmitter from "events";

class NavigationStore extends EventEmitter {
  constructor() {
    super();

    this.state = {
      currentPage: NavigationActionTypes.FEED,
      projectId: null
    };
  }

  getState() {
    return this.state;
  }

  handleActions(action) {
    this.state.currentPage = action.type;
    if (action.id !== undefined && action.id !== null) {
      this.state.projectId = action.id;
    } else {
      this.state.projectId = null;
    }
    this.emit("change");
  }
}

const navigationStore = new NavigationStore();
NavigationDispatcher.register(
  navigationStore.handleActions.bind(navigationStore)
);
export default navigationStore;
