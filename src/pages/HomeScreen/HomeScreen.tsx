import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';

class HomeScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />

            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>We are wonderfull book store! Welcome!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            small
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;