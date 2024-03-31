
import {Http} from './http';

export class Api {
  static register(data: any) {
    return Http.post('/user/register', data);
  }
}
