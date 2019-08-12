    
import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import LoginScreen from "../pages/loginScreen/loginScreen";
import RegisterScreen from "../pages/register/register";
import BooksScreen from "../pages/BooksScreen/booksScreen";
import SideBar from "../components/SideBar";
import AdminPanel from "../pages/AdminPage/AdminPage";

const DrawerNavigator = createDrawerNavigator({

    Home: { screen: HomeScreen },
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