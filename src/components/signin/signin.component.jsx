import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export default class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }
    render() {
        return (
            <div className="sign-in" onSubmit={this.handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form action="#">
                    <FormInput 
                        id="email" 
                        type="email" 
                        required
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="Email"
                    />

                    <FormInput  
                        id="password" 
                        type="password" 
                        required
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                    />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}