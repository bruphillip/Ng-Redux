import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import * as PostActions from './Types';
import * as UserAction from './action/userAction';
import { User } from './user.model';

interface AppState {
  message: string;
  post: Post;
  user: User;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string;
  usuario: User = {
    age: 0,
    login: '',
    name: '',
    password: ''
  };

  _message: Observable<string>;
  _post: Observable<Post>;
  _user: Observable<User>;

  constructor(private store: Store<AppState>) {
    this._message = this.store.select('message');
    this._post = this.store.select('post');
    this._user = this.store.select('user');
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upVotePost() {
    this.store.dispatch(new PostActions.UpVote());
  }

  downVotePost() {
    this.store.dispatch(new PostActions.DownVote());
  }

  newUser(user: User) {
    this.store.dispatch(new UserAction.AddUser({ ...user }));
    this._user.subscribe(res => console.log(res));
  }

  removeUser(user: User) {
    this.store.dispatch(new UserAction.RemoveUser(user));
  }

  clearList() {
    this.store.dispatch(new UserAction.CleanUserList());
  }
}
