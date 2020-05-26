import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post } from './posts';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import{AlbumComponent} from './album/album.component';
import { from } from 'rxjs';
import { PhotoComponent } from './photo/photo.component';


const routes: Routes = [
  {path: '', redirectTo: 'comment', pathMatch: 'full'},
  {path: 'post', component: PostComponent},
  {path: 'comment', component: CommentComponent},
  {path:'album', component: AlbumComponent},
  {path: 'photo' , component: PhotoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

