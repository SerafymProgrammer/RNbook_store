import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  StatusBar
} from "react-native";
import ButtonRegister from "./ButtonRegister";
import FormTextInput from "./FormTextInput";
import colors from "./config/colors";
import strings from "./config/strings";
import { UserRegister } from "../../store/register/types";
import { registerRequest } from "../../store/register/actions";
import { ConnectedReduxProps } from "../../interfaces/connectedReduxProps.interface";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";

import { Left, Icon, Title, Body, Right, Button, Header, Container, Content } from "native-base";

interface PropsFromState {
  loading: boolean
  data: UserRegister
  errors?: string
}

interface PropsFromDispatch {
  registerRequest: typeof registerRequest
}
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps


interface State {
  email: string;
  password: string;
  confirm_password: string;
}

class RegisterScreen extends React.Component<AllProps, State> {
  passwordInputRef = React.createRef<FormTextInput>();
  constructor(props: AllProps) {
    super(props);
    debugger
  }
  public componentDidMount() {

  }

  state: State = {
    email: "",
    password: "",
    confirm_password: ""
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };
  handleConfirmPasswordChange = (confirm_password: string) => {
    this.setState({ confirm_password: confirm_password });
  };

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };



  handleRegisterPress = () => {
    if (this.state.password !== this.state.confirm_password) {
      return;
    }
    const addUser: UserRegister = this.state;
    debugger
    this.props.registerRequest(addUser);
    this.props.navigation.navigate('Home')
  };

  render() {
    debugger
    const { data } = this.props;
    const {
      email,
      password,
      // emailTouched,
      // passwordTouched
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



      <Container>

        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.openDrawer()} transparent>
              <Icon name="menu" />

            </Button>
          </Left>
          <Body>
            <Title>Register</Title>
          </Body>
          <Right />
        </Header>

        <Content>
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

          <FormTextInput
            ref={this.passwordInputRef}
            value={this.state.confirm_password}
            onChangeText={this.handleConfirmPasswordChange}
            placeholder={'Confirm password'}
            secureTextEntry={true}
            returnKeyType="done"
            error={passwordError}
          />
          <ButtonRegister
            label={strings.LOGIN}
            onPress={this.handleRegisterPress}
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

const mapStateToProps = ({ register }: ApplicationState) => ({
  loading: register.loading,
  data: register.data,
  errors: register.errors
})

const mapDispatchToProps = {
  registerRequest
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    RegisterScreen
  )
