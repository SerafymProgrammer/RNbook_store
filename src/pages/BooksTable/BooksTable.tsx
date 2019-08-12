import React from "react";
import { booksListRequest } from "../../store/booksList/actions";
import { ConnectedReduxProps } from "../../interfaces/connectedReduxProps.interface";
import { Book } from "../../store/booksList/types";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { Container, Header, Content, Accordion, Left, Button, Icon, Title, Body, Right, Text, List, Thumbnail, ListItem } from "native-base";
import { Image } from "react-native-elements";

interface PropsFromState {
  loading: boolean
  data: Book[]
  errors?: string
}

interface PropsFromDispatch {
  booksListRequest: typeof booksListRequest,
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps


class BooksTable extends React.Component<AllProps>  {


  dataItemsArray(books: Book[]) {
    const newDataItemsArray = [];

    const renderContent = (img: string, author: string, description: string, price: string) => {
        return (
            <Content>
                <Image source={{ uri: img }} style={{ width: 200, height: 100 }} />
                <Text> Author: {author}</Text>
                <Text>Description: {description}</Text>
                <Text>Price: {price}</Text>
                <Button style={{ width: 150 }}><Text>Edite</Text></Button>
                <Button style={{ width: 150 }}><Text>Delete</Text></Button>
            </Content>
        )
    }

    for (const book of books) {
        let thor ='';

        if(book.author) {
          thor = book.author 
        }
        newDataItemsArray.push({
            title: book.name,
            content: renderContent(book.img, thor, book.description, book.price)
        }
        )
    }
    return newDataItemsArray;
}

constructor(props: AllProps) {
    super(props);
}

  public componentDidMount() {
    debugger
    this.props.booksListRequest()
  }

_renderContent(item: any) {
    return (
        <Content>
            {item.content}
        </Content>
    );
}

public render() {
    debugger
    const { data } = this.props
    const newBooksList = this.dataItemsArray(data);
    return (
        <Container>
            <Content padder>
                <Button><Text>Add New Book</Text></Button>
                <Accordion dataArray={newBooksList} expanded={0} renderContent={this._renderContent} contentStyle={{ backgroundColor: "#ddecf8" }} />
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