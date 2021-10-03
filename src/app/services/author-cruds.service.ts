import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { AuthorService } from './author.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorCrudsService {

  constructor( private authorService:AuthorService) { }

  getAllAuthor(): Author[]{
    return this.authorService.getAllFromStorage() 
  }

  getAuthorByID(id: number): Author|string{
    return this.authorService.getAuthByID(id)
  }

  createAuthor(a: Author){
    this.authorService.setOneItem(a)
  }

  updateAuthor(a: Author){
    this.authorService.upadateAuthor(a)
  }

  deleteAuthor(id: number){
    this.authorService.deleteAuthor(id)
  }

}
