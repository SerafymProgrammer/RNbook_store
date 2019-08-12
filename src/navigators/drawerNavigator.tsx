    
import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../pages/HomeScreen/HomeScreen";
import Launch from "../pages/Launch";
import LoginScreen from "../pages/loginScreen/loginScreen";
import RegisterScreen from "../pages/register/register";
import BooksScreen from "../pages/booksScreen/booksScreen";
import SideBar from "../components/SideBar";
import BooksTable from "../pages/BooksTable/BooksTable";
import AdminPanel from "../pages/AdminPage/AdminPage";

const DrawerNavigator = createDrawerNavigator({

    Home: { screen: HomeScreen },
    Launch: { screen: Launch },
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    Books: { screen: BooksScreen },
    AdminPanel: {screen: AdminPanel}
},
{
    contentComponent: props => <SideBar {...props} />,
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;