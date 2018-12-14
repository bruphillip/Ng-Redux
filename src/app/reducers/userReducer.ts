import { User } from '../user.model';
import * as UserActions from '../action/userAction';

export type Actions = UserActions.All;

function Crypt(password: string): string {
  const splitedPass = password.split('');
  let pass = '';
  splitedPass.forEach(e => (pass += `${e}${Math.random()}`));
  return pass;
}

function defaultUser(): User[] {
  const state = JSON.parse(localStorage.getItem('state'));
  if (!state) {
    return [];
  }
  return state;
}

export function userReducer(state: User[] = defaultUser(), action: Actions) {
  console.log(state, action.type);
  localStorage.getItem('state');
  switch (action.type) {
    case UserActions.ADD_USER:
      action.payload.password = Crypt(action.payload.password);
      localStorage.setItem('state', JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case UserActions.REMOVE_USER:
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      localStorage.setItem('state', JSON.stringify(state));
      return state;
    case UserActions.CLEAN_USER_LIST:
      localStorage.setItem('state', JSON.stringify([]));
      return (state = []);
    default:
      return state;
  }
}
