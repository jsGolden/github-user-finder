import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from "styled-components";

import { Welcome } from '../pages/Welcome';
import { Home } from "../pages/Home";
import { User } from "../pages/User";
import { Followers } from "../pages/Followers";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  const theme = useContext(ThemeContext);

  return(
      <>
        <StatusBar
          translucent
          style={theme.title === "light" ? "dark" : "light"}
          animated
        />
        <stackRoutes.Navigator headerMode="none">
          <stackRoutes.Screen name="Welcome" component={Welcome} />
          <stackRoutes.Screen name="Home" component={Home} />
          <stackRoutes.Screen name="User" component={User} />
          <stackRoutes.Screen name="Followers" component={Followers} />
        </stackRoutes.Navigator>
    </>
  );
}
export default AppRoutes;