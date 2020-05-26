import { Component, OnInit } from '@angular/core';
import {PlaceholderService} from '../placeholder.service';
import { Post } from '../posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  constructor(private placeHolderService: PlaceholderService){}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    this.placeHolderService.getAll().subscribe((res) => {this.posts=res;})
  }


}
