    
import React from "react";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "Launch", "Login", "Register", "Books", "AdminPanel"];
class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
        <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
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

          <Button onPress = {()=>this.props.navigation.closeDrawer()}><Text>Close Menu</Text></Button>
        </Content>

      </Container>
    );
  }
}
export default SideBar;