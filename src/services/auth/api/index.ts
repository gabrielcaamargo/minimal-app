import { httpClient } from '@/http';
import { TSigninDto } from '../types';

async function signin(signinDto: TSigninDto) {
  return httpClient.post('/auth/signin', signinDto)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err.response.data.message);
    });
}



export { signin };
