import React from "react";
import "./styles.css";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout__background">
      <div className="layout__star-pattern" />
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
