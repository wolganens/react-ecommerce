import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
}
handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
}
handleSubmit = async e => {
    e.preventDefault();
    const {email, password, confirmPassword, displayName} = this.state;
    if (password !== confirmPassword) {
      return alert("passwords don't match");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.log(error);
    }        
}
render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
        <div className="sign-up" onSubmit={this.handleSubmit}>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form action="#" onSubmit={this.handleSubmit}>
                <FormInput 
                    id="displayName" 
                    type="text" 
                    required
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                />
                <FormInput 
                    id="email" 
                    type="email" 
                    required
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                />

                <FormInput  
                    id="password" 
                    type="password" 
                    required
                    name="password"
                    value={password}
                    handleChange={this.handleChange}
                    label="Password"
                />
                <FormInput  
                    id="confirmPassword" 
                    type="password" 
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={this.handleChange}
                    label="Confirm Password"
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign Up</CustomButton>                    
                </div>
            </form>
        </div>
    );
}
}

export default SignUp;
