import * as React from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "./styles.scss";

// Components
import Header from "./header";
import Body from "./body";

const App = () => {
  return (
    <>
      <ReactNotifications />
      <Header />
      <Body />
    </>
  );
};

export default App;
