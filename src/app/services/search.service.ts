import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { AuthorCrudsService } from './author-cruds.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  authorsAll!:Author[]
  constructor(private authorService: AuthorCrudsService) { }

  getAllAuthor(){
    this.authorsAll=this.authorService.getAllAuthor()
  }
  findBook(book: string){
    this.getAllAuthor()
    let authors: Author[]=[]
    let str: string[] = []
    let regEx = new RegExp(book,'i')
    for(let a of this.authorsAll){
      for(let b of a.books){
        
        if(regEx.test(b.title)){
          str.push(b.title)
          authors.push(a)
        }
        
      }
    }
    return {books:str, authors:authors}
  }
}
