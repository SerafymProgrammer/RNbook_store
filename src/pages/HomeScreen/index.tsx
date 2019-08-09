    
import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";

import { createAppContainer, createDrawerNavigator } from "react-navigation";
import Launch from "../Launch.js";
import LoginScreen from "../loginScreen/loginScreen";
import RegisterScreen from "../register/register";
import BooksScreen from "../booksScreen/booksScreen";
import SideBar from "../../components/SideBar.js";

const DrawerNavigator = createAppContainer( createDrawerNavigator(
    {
      Home: { screen: HomeScreen },
      Launch: { screen: Launch },
      Login: { screen: LoginScreen },
      Register: { screen: RegisterScreen },
      Books: { screen: BooksScreen }
    },
    {
      contentComponent: props => <SideBar {...props} />,
      initialRouteName: 'Home'
    }
  ));
 // export default DrawerNavigator;