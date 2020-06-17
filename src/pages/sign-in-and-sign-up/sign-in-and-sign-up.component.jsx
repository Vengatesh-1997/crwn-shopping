import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpCOntainer } from './sign-in-and-sin-up.styles';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpCOntainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpCOntainer>
);

export default SignInAndSignUpPage;
