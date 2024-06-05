import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout__background">
      <div className="layout__star-pattern" />
      <div className="layout__gradient" />
      <Outlet />
    </div>
  );
}

export default Layout;
