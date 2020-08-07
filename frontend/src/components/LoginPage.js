import React, { Component } from 'react';
import './LoginPage.css';
import { FormGroup, FormControl, FormLabel, Form, Button, FormText} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchUserStatus } from '../actions/UserDetailsActions';

class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            loginId : "",
            password : ""
        }
    }

    handleTextChange = event => {
        let input = event.target.name;
        let value = event.target.value;
        this.setState ({
            [input] : value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        let userDetails = {
            username : this.state.loginId,
            password : this.state.password
        };
        this.props.fetchUserStatus(userDetails);
    }

    render(){

        return(
            <div className = "full-div">
                <div className = "login-background"></div>
                <Form className = "form" onSubmit = {this.handleFormSubmit}>
                    <h3>Welcome to Bistro's Kitchen</h3><br/>
                    <FormGroup>
                        <FormLabel>Login Id</FormLabel>
                        <FormControl name = "loginId" value = {this.state.loginId} onChange = {this.handleTextChange}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type = "password" name = "password" value = {this.state.password} onChange = {this.handleTextChange}/>
                    </FormGroup>
                    <Button variant="success" type = "submit">
                        LogIn
                    </Button>
                    { this.props.validationLoading && 
                        <FormText> Authenticating User Details!!! </FormText>} 
                    { this.props.validationFailed && 
                        <FormText type = "invalid"> Invalid Login Id or Password Entered.</FormText>}
                    { this.props.validationSuccess &&
                        <FormText type = "valid"> Login Successfull.</FormText>}
                    <br/><br/>
                    <p>Don't have a account?  <a href="/">Create Account</a></p>
                    <p><a href="/">Forgot Password?</a></p>
                </Form>                
            </div>
        )
    }
}


const mapStateToProps = state => ({
        validationLoading : state.userValidationLoading,
        validationFailed : state.userValidationFailed,
        validationSuccess : state.userValidated
})

export default connect(mapStateToProps, { fetchUserStatus })(LoginPage);