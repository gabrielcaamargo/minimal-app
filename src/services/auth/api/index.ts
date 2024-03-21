import { httpClient } from '@/http';
import { SigninDtoT } from '../types';

async function signin(signinDto: SigninDtoT) {
  return httpClient.post('/auth/signin', signinDto)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err.response.data.message);
    });
}

export { signin };
