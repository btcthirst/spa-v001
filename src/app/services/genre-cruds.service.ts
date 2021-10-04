import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { GenreService } from './genre.service';

@Injectable({
  providedIn: 'root'
})
export class GenreCrudsService {

  constructor(private genreService: GenreService) { }

  getAllGenre(){
    return this.genreService.getAllFromStorage()
  }

  getGenre(id: number):Genre|string{
    return this.genreService.getGenreByID(id)
  }

  createGenre(g: Genre){
    this.genreService.setOneItem(g)
  }

  updateGenre(g: Genre){
    this.genreService.upadateGenre(g)
  }

  deleteGenre(id: number){
    this.genreService.deleteGenre(id)
  }
}
