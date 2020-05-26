import { Component, OnInit } from '@angular/core';
import{PlaceholderService} from '../placeholder.service';
import { from } from 'rxjs';
import { Album } from '../album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
albums: Album[];
  constructor(private placeHolderService: PlaceholderService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

getAlbums(){
  this.placeHolderService.getAllAlbum().subscribe((res)=> {this.albums=res;})
}

}
