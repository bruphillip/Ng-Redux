import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { simpleReducer } from './reducers/simpleReducer';
import { postReducer } from './reducers/postReducer';
import { AppComponent } from './app.component';
import { userReducer } from './reducers/userReducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      message: simpleReducer,
      post: postReducer,
      user: userReducer
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
