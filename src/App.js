import React from "react";
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";

function App() {
  const user = null;
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
