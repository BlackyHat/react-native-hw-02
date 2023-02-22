import React, { useState } from "react";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";

import Login from "./screens/LoginScreen";
// import Register from "./screens/RegistrationScreen";

const App = () => {
  // const [isReady, setIsReady] = useState(false);

  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //   );
  // }

  return (
    <>
      <Login />
      {/* <Register /> */}
    </>
  );
};

export default App;
