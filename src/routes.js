import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Repositories from "./pages/Repositories/Repositories";
import Issues from "./pages/Issues/Issues";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Repositories,
      Issues
    },
    {
      initialRouteName: "Repositories"
    }
  )
);

export default Routes;
