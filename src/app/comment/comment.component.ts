import { Component, OnInit } from '@angular/core';
import {PlaceholderService} from '../placeholder.service';
import {Comment} from '../comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments:Comment[];
  constructor(private placeHolderService: PlaceholderService) { }

  ngOnInit(): void {
    this.getComments();
  }
  getComments(){
    this.placeHolderService.getAllComment().subscribe((res)=>{this.comments=res;})
  }

}
