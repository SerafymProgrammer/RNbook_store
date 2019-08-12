import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  StatusBar,
  AsyncStorage,
  Alert
} from "react-native";
import ButtonLogin from "./ButtonLogin";
import FormTextInput from "./FormTextInput";
import colors from "./config/colors";
import strings from "./config/strings";
import { UserRegister, User } from "../../store/register/types";
import { registerRequest } from "../../store/register/actions";
import { ConnectedReduxProps } from "../../interfaces/connectedReduxProps.interface";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import jwt from 'jwt-decode';
import { loginRequest } from "../../store/login/actions";
import { Header, Left, Button, Icon, Title, Body, Right, Container, Content } from "native-base";

type MyProps = { email: string, password: string };

type MyState = { email: string, password: string };

interface PropsFromState {
  loading: boolean
  token: any
  errors?: string
}

interface PropsFromDispatch {
  loginRequest: typeof loginRequest
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

interface State {
  email: string;
  password: string;
}
class LoginScreen extends React.Component<AllProps, State> {
  passwordInputRef = React.createRef<FormTextInput>();

  constructor(props: AllProps) {
    super(props);
  }
  state: State = {
    email: "",
    password: "",
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };


  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };

  handleLoginPress = async () => {
    const addUser: UserRegister = this.state;
    await this.props.loginRequest(addUser);
    await AsyncStorage.getItem('user').then(value => {
      console.log(value)
    });
    this.props.navigation.navigate('Home')
  };

  render() {
    const {
      email,
      password,
    } = this.state;
    const emailError =
      !email
        ? strings.EMAIL_REQUIRED
        : undefined;
    const passwordError =
      !password
        ? strings.PASSWORD_REQUIRED
        : undefined;
    return (
      <Container >

        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
              <Title>Menu</Title>
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content >

          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            onSubmitEditing={this.handleEmailSubmitPress}
            placeholder={strings.EMAIL_PLACEHOLDER}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            error={emailError}
          />

          <FormTextInput
            ref={this.passwordInputRef}
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            returnKeyType="done"
            error={passwordError}
          />

          <ButtonLogin
            label={strings.LOGIN}
            onPress={this.handleLoginPress}
            disabled={!email || !password}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

const mapStateToProps = ({ login }: ApplicationState) => ({
  loading: login.loading,
  data: login.token,
  errors: login.errors
})

const mapDispatchToProps = {
  loginRequest
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    LoginScreen
  )
