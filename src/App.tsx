import React from "react";
import Main from "./layouts/main";
import ContextProvider from "./hooks/useContext";

function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default App;
