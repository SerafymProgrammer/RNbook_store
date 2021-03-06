import React from "react";
import { booksListRequest } from "../../store/booksList/actions";
import { ConnectedReduxProps } from "../../interfaces/connectedReduxProps.interface";
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

class BooksScreen extends React.Component<AllProps>  {
  constructor(props: AllProps) {
    super(props);
  }

  public componentDidMount() {
    debugger
    this.props.booksListRequest()
  }

  public render() {
    debugger
    const { data } = this.props

    return (

      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Books</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <List>

            {data.map((book) => {
              return (
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={{ uri: book.img }} style={{ width: 10, height: 10 }} />
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
              )
            })}

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
    BooksScreen
  )
