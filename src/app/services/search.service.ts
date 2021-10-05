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
    let res: {books: string[]; author: Author}[]=[]
    let authors: Author
    let str: string[]
    let regEx = new RegExp(book,'i')
    for(let a of this.authorsAll){
      str = []
      for(let b of a.books){        
        if(regEx.test(b.title)){
          str.push(b.title)          
        }        
      }
      if(str[0]!=''){
        res.push({books:str,author:a})
      }
    }
    return res
  }
}
