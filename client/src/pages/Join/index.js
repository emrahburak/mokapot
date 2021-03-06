import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Join = props => {

    return(
	 <Form>
	    <h3>Join</h3>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="passwordConfirm">Password Confirm</Label>
        <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="password placeholder" />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
    )
}




export default Join;
