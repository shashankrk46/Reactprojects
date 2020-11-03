import React, { Component } from 'react'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-bottom/custom-bottom';
import { signInWithGoogle } from '../../firebase/firbase.utilis';
import './sign-in.style.scss';

class signIn extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefalut();

    this.setState({ email: '', password: '' })
  }
  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }



  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>


        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required />

          <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />

          <div className='buttons'>
            <CustomButton type='submit' value='submit' >
              Sign In
          </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with Google
          </CustomButton>
          </div>

        </form>

      </div>
    )
  }
}

export default signIn;

