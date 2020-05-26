import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import{map} from 'rxjs/operators';
import { Post } from './posts';
import {Comment} from './comments';
import { Album } from './album';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(private http: HttpClient) { }
  posts:Post[];
  comments: Comment[];
  albums: Album[];
  photos: Photo[];
  myUrl='https://jsonplaceholder.typicode.com/posts';
  myUrl2='https://jsonplaceholder.typicode.com/comments';
  myUrl3='https://jsonplaceholder.typicode.com/albums';
  myUrl4='https://jsonplaceholder.typicode.com/photos';

  getAll():Observable<Post[]>{
    return this.http.get(`${this.myUrl}`).pipe(map((res:Post[])=>{
      this.posts=res; 
      return this.posts;
    }));
  }
  getAllComment():Observable<Comment[]>{
    return this.http.get(`${this.myUrl2}`).pipe(map((res:Comment[])=> {
      this.comments=res;
    return this.comments;
  }));
  }

  getAllAlbum(){
    return this.http.get(`${this.myUrl3}`).pipe(map((res:Album[])=>{
      this.albums=res; 
      return this.albums;
    }));
  }

  getAllPhoto(){
    return this.http.get(`${this.myUrl4}`).pipe(map((res:Photo[]) => {
      this.photos=res; 
      return this.photos;
    }));
  }
}
