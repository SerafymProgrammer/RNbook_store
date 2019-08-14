import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Button, Title, Body, Right } from 'native-base';
import BooksTable from '../BooksTable/BooksTable';
import UsersTable from '../UsersTable/UsersTable';

export default class AdminPanel extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style = {{marginLeft: 20}}>
            <Title>Admin Panel</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading={<TabHeading><Text>Books</Text></TabHeading>}>
            <BooksTable />
          </Tab>
          <Tab heading={<TabHeading><Text>Users</Text></TabHeading>}>
            <UsersTable />
          </Tab>
          <Tab heading={<TabHeading><Text>Setting Profile</Text></TabHeading>}>
            <Text>hgfhghf</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}