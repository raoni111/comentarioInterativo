import { db } from '../db/connection';
import { ref, set } from 'firebase/database';
import CreateUserProtocol from './interface/create-user-protocol';

export class PostUser {
  constructor(protected user: CreateUserProtocol) {}
  post(): void {
    set(ref(db, 'users/' + this.user.userId), this.user);
  }
}
