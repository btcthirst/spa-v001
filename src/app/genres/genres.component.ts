import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../models/genre';
import { GenreCrudsService } from '../services/genre-cruds.service';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres!:Genre[]
  
  constructor(private genreService: GenreCrudsService, private routs: Router) { }

  ngOnInit(): void {
    this.getter()
  }
  getter(){
    this.genres=this.genreService.getAllGenre()
  }

  deleteGenre(id: number){
    this.genreService.deleteGenre(id)
    this.getter()
  }
  updateGenre(id:number){
    this.routs.navigate([`/genres/update/${id}`])
  }
}
