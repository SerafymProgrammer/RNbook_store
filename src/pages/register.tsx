
import React, {Component} from 'react';
import { Button, View } from 'react-native';
import { Header, Icon, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { ConnectedReduxProps } from '../interfaces/connectedReduxProps';
import { ApplicationState } from '../store';
import { registerRequest } from '../store/register/actions';
import { UserRegister } from '../store/register/types';

type MyProps = { email: string, password: string };

type MyState = { email: string, password: string};

interface PropsFromState {
  loading: boolean
  data: UserRegister
  errors?: string
}

interface PropsFromDispatch {
  registerRequest: typeof registerRequest
}
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

class RegisterScreen extends React.Component<AllProps, MyProps, MyState> {

    constructor(props:AllProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    validate = (values: MyState) => {
        const errors = {email: '', password: ''}
        
        if (!values.email) {
          return alert('Required')
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          return alert('Invalid email address')
        }
        if (!values.password ) {
          return alert('Password Required')
        } 
        // else if (values.password !== values.confirm_password) {
        //   return alert('Passwords do not match')
        // } 
        this.setState({
          email:values.email,
          password: values.password
      })
      const addUser: UserRegister = this.state!;
      
      this.props.registerRequest(addUser);
      this.props.navigation.navigate('Home')
    
      return false
      }
      
    // tslint:disable-next-line:no-any
    handleChange = (event: any) => this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    });
  render() {
    return (
      <View> 
                 <Header
                     centerComponent={{ text: 'REGISTER', style: { color: '#fff', marginBottom: 10, fontFamily: 'Fantasy', fontWeight: "bold" } }}
                     containerStyle={{
                         backgroundColor: '#223b4f',
                         height: 40
                     }}
                 />

                 <Input
                     placeholder='BASIC INPUT'
                     onChange={this.handleChange}
                     value={this.state.email}
                 />

                 <Input
                     placeholder='INPUT WITH ICON'
                     leftIcon={{ type: 'user', name: 'chevron-left' }}
                     onChange={this.handleChange}
                     value={this.state.password}
                 />

                 <Button
                     title="Submit"
                     // tslint:disable-next-line:jsx-no-lambda
                     onPress={() => this.validate(this.state)}
                 />
             </View>

         );
     }
 }

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
  
// export default RegisterScreen; 