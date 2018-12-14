import { Action } from '@ngrx/store';

export const EDIT_TEXT = 'EDIT';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';
export const RESET = 'RESET';

export class EditText implements Action {
  readonly type = EDIT_TEXT;
  constructor(public payload: string) {}
}

export class UpVote implements Action {
  readonly type = 'UPVOTE';
}

export class DownVote implements Action {
  readonly type = 'DOWNVOTE';
}

export class Reset implements Action {
  readonly type = 'RESET';
}

export type All = EditText | DownVote | Reset | UpVote;
