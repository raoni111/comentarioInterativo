import { db } from '../firebase/connection';
import { ref, set } from 'firebase/database';
import CreateUserProtocol from './interface/create-user-protocol';

export class PostUser {
  constructor(protected user: CreateUserProtocol) {}
  post(): void {
    set(ref(db, 'users/' + this.user.userName), this.user);
  }
}
