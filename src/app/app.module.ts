import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostsService} from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  {path: 'new', component: NewPostComponent},
  {path: '', component: PostListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
