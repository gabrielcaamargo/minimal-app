import { httpClient } from '@/http';
import { TSigninDto, TSignupDto } from '../types';

async function signin(signinDto: TSigninDto) {
  return httpClient.post('/auth/signin', signinDto)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err.response.data.message);
    });
}

async function signup(signupDto: TSignupDto) {
  return httpClient.post('/auth/signup', signupDto)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err.response.data.message);
    });
}


export { signin, signup };
