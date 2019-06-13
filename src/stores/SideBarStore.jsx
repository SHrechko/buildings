import SideBarDispatcher from "../data/SideBarDispatcher";
import EventEmitter from "events";

class NavigationStore extends EventEmitter {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  getState() {
    return this.state;
  }

  handleActions(action) {
    this.state.open = action.open;
    this.emit("change");
  }
}

const sideBarStore = new NavigationStore();
SideBarDispatcher.register(sideBarStore.handleActions.bind(sideBarStore));
export default sideBarStore;
