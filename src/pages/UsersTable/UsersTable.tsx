import React from "react";
import { ConnectedReduxProps } from "../../interfaces/connectedReduxProps.interface";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { Container, Header, Content, Accordion, Left, Button, Icon, Title, Body, Right, Text, List, Thumbnail, ListItem } from "native-base";
import { User } from "../../store/register/types";
import { usersListRequest } from "../../store/usersList/actions";
import { Image } from "react-native-elements";

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

    dataItemsArray(users: User[]) {
        const newDataItemsArray = [];

        const renderContent = (img: string, password: string, isAdmin: boolean) => {
            return (
                <Content>
                    <Image source={{ uri: img }} style={{ width: 200, height: 100 }} />
                    <Text> Password: {password}</Text>
                    <Text>Is Admin: {JSON.stringify(isAdmin)}</Text>
                    <Button style={{ width: 150 }}><Text>Edite</Text></Button>
                    <Button style={{ width: 150 }}><Text>Delete</Text></Button>
                </Content>
            )
        }

        for (const user of users) {
            let is_Admin = true;

            if (user.isAdmin) {
                is_Admin = user.isAdmin
            }
            newDataItemsArray.push({
                title: user.email,
                content: renderContent(user.img, user.password, is_Admin)
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
        this.props.usersListRequest()
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
        const { users } = this.props
        const newUsersList = this.dataItemsArray(users);
        return (
            <Container>
                <Content padder>
                    <Button><Text>Add New User</Text></Button>
                    <Accordion dataArray={newUsersList} expanded={0} renderContent={this._renderContent} contentStyle={{ backgroundColor: "#ddecf8" }} />
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