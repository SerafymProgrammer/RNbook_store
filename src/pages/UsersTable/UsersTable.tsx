import { View } from "react-native";
import React from "react";
import { booksListRequest } from "../../store/booksList/actions";
import { ConnectedReduxProps } from "../../interfaces/connectedReduxProps";
import { Book } from "../../store/booksList/types";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { Container, Header, Content, Accordion, Left, Button, Icon, Title, Body, Right, Image, Text, List, Thumbnail, ListItem } from "native-base";
import { User } from "../../store/register/types";
import { usersListRequest } from "../../store/usersList/actions";

interface PropsFromState {
    loading: boolean
    users: User[]
    errors?: string
  }
  
  interface PropsFromDispatch {
    usersListRequest: typeof usersListRequest;

  }
  
  type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps
  
  const renderImg = (img: string) =>  <Image source={img} style={{height: 200, width: null, flex: 1}}/>

  class UsersTable extends React.Component<AllProps>  {
    constructor(props: AllProps) {
      super(props);
    }

    public componentDidMount() {
      debugger
      this.props.usersListRequest()
   //   fetch('http://10.10.3.80:3010/books').then(a=> {debugger; a.json()}).then((a)=>{debugger; a})
    }

    public render() {
      debugger
    const { users } = this.props
    
      return (

        <Container>
        <Content padder>

            <List>

            {users.map((user) =>{
            debugger
          return (
            <ListItem thumbnail>
                <Left>
                  <Thumbnail   source={{ uri: user.img }} style = { {width: 10, height: 10}} />
                </Left>
                <Body>
                  <Text>{user.email}</Text>
                  <Text note numberOfLines={1}>{user.passsword}</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>

                 
              )})}

              
            </List>

          
        </Content>
      </Container>
      
          
            
             

    
      )
    }
  
  }

  const mapStateToProps = ({ usersList }: ApplicationState) => ({
    loading: usersList.loading,
    errors: usersList.errors,
    users: usersList.users
})

const mapDispatchToProps = {
    usersListRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersTable)