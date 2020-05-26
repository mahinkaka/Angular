import { Component, OnInit } from '@angular/core';
import {PlaceholderService} from '../placeholder.service';
import { from } from 'rxjs';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
photos: Photo[];
  constructor(private placeHolderService: PlaceholderService) { }

  ngOnInit(): void {
    this.getPhoto();
  }

getPhoto(){
  this.placeHolderService.getAllPhoto().subscribe((res)=>{
    this.photos=res;
  })
}

}
