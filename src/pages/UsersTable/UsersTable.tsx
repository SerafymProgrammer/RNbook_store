import React from "react";
import { ConnectedReduxProps } from "../../interfaces/connectedReduxProps.interface";
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

class UsersTable extends React.Component<AllProps>  {
    constructor(props: AllProps) {
        super(props);
    }

    public componentDidMount() {
        debugger
        this.props.usersListRequest()
    }

    public render() {
        debugger
        const { users } = this.props
        return (
            <Container>
                <Content padder>
                    <List>
                        {users.map((user) => {
                            debugger
                            return (
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail source={{ uri: user.img }} style={{ width: 10, height: 10 }} />
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
                            )
                        })}
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