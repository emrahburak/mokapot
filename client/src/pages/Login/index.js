import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = props => {

    return(
	 <Form>
	    <h3>Login</h3>
	    <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
	    </FormGroup>
	    <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
	    </FormGroup>
	    <Button>Submit</Button>
	</Form>
    )
}




export default Login;
