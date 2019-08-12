import React from "react";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Header,
  H1,
  H2
} from "native-base";
import { StyleSheet } from "react-native";
const routes = ["Home",  "Login", "Register", "Books", "AdminPanel"];
class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Header style = {styles.logo}><H1>Paints of Life</H1></Header>
        <Content>
        
        <List
            dataArray={routes}
            contentContainerStyle={{ }}
            renderRow={data => {
              return (

                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Icon name = 'search'></Icon>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />

          <Button onPress = {()=>this.props.navigation.closeDrawer()} style = {styles.close}><Text>Close Menu</Text></Button>
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({

  logo: {
    paddingTop: 20,
    backgroundColor: '#236c88',
    display: "flex",
    justifyContent: 'center',
    
  },
  close: {
    marginTop:30,
    marginLeft:50,
    width: 200
  }
});
export default SideBar;