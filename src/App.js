import React from "react";

import { Add2 } from "./components/pages/Add2";
import Header from "./components/Header";
import { Content } from "./components/pages/Content";

const App = () => {
  return (
    <div>
      <Header />
      <Add2 />
      <Content />
    </div>
  );
};

export default App;
