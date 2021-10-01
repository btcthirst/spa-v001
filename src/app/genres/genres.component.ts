import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres!:Genre[]
  toggle=false
  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genres=this.genreService.getGenres()
  }

  toggler(){
    this.toggle = !this.toggle
  }
}
