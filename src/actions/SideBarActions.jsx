import SideBarDispatcher from "../data/SideBarDispatcher";

const Actions = {
  openSideBar() {
    SideBarDispatcher.dispatch({
      open: true
    });
  },
  closeSideBar() {
    SideBarDispatcher.dispatch({
      open: false
    });
  }
};

export default Actions;
