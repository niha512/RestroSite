import React, { Component } from 'react';
import './LoginPage.css';
import { FormGroup, FormControl, FormLabel, Form, Button} from 'react-bootstrap';

class LoginPage extends Component {

    render(){

        return(
            <div className = "full-div">
                <div className = "login-background"></div>
                <Form className = "form">
                    <h3>Welcome to Bistro's Kitchen</h3><br/>
                    <FormGroup>
                        <FormLabel>Login Id</FormLabel>
                        <FormControl className = "col-xs-8" type = "email" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type = "password" />
                    </FormGroup>
                    <Button variant="success">
                        LogIn
                    </Button>
                    <br/><br/>
                    <p>Don't have a account?  <a href="/">Create Account</a></p>
                    <p><a href="/">Forgot Password?</a></p>
                </Form>                
            </div>
        )
    }
}

export default LoginPage;