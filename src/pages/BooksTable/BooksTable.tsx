import { View } from "react-native";
import React from "react";
import { booksListRequest } from "../../store/booksList/actions";
import { ConnectedReduxProps } from "../../interfaces/connectedReduxProps";
import { Book } from "../../store/booksList/types";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { Container, Header, Content, Accordion, Left, Button, Icon, Title, Body, Right, Image, Text, List, Thumbnail, ListItem } from "native-base";

interface PropsFromState {
    loading: boolean
    data: Book[]
    errors?: string
  }
  
  interface PropsFromDispatch {
    booksListRequest: typeof booksListRequest,

  }
  
  type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps
  
  const renderImg = (img: string) =>  <Image source={img} style={{height: 200, width: null, flex: 1}}/>

  class BooksTable extends React.Component<AllProps>  {
    constructor(props: AllProps) {
      super(props);
    }

    public componentDidMount() {
      debugger
      this.props.booksListRequest()
   //   fetch('http://10.10.3.80:3010/books').then(a=> {debugger; a.json()}).then((a)=>{debugger; a})
    }

    public render() {
      debugger
    const { data } = this.props
    
      return (

        <Container>
        <Content padder>

            <List>

            {data.map((book) =>{
            debugger
          return (
            <ListItem thumbnail>
                <Left>
                  <Thumbnail   source={{ uri: book.img }} style = { {width: 10, height: 10}} />
                </Left>
                <Body>
                  <Text>{book.name}</Text>
                  <Text note numberOfLines={1}>{book.description}</Text>
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

  const mapStateToProps = ({ booksList }: ApplicationState) => ({
    loading: booksList.loading,
    errors: booksList.errors,
    data: booksList.data
  })

  const mapDispatchToProps = {
    booksListRequest
  }

  export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    BooksTable
  )