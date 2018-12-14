import { Action } from '@ngrx/store';
import { User } from '../user.model';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const CLEAN_USER_LIST = 'CLEAN_USER_LIST';

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: User) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public payload: User) {}
}

export class CleanUserList implements Action {
  readonly type = CLEAN_USER_LIST;
}

export type All = AddUser | RemoveUser | CleanUserList;
