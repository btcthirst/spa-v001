import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { AuthorService } from './author.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorCrudsService {

  constructor( private authorService:AuthorService) { }

  getAllAuthor(): Author[]| null{
    console.log("get all author start")
    let authors: Author[]
    let dirtyA= localStorage.getItem('author')
    
    if(dirtyA==null){
      console.log("ничего не вернулось")
      authors=this.authorService.getAuthorFrom()
      localStorage.setItem('author', JSON.stringify(authors) )
      return authors
    } else{
     return authors=JSON.parse(dirtyA)  
    }
    
  }

  getAuthor(sur: string): Author| string{
    console.log("get author start")
    let authors = this.getAllAuthor()
    
    if(authors==null){
      console.log("нет данных")
      return "нет данных"
    } else{
      for (let a of authors){
        if(a.surname==sur){
          return a
        }
      }      
    }
    return "нет данных или что-то пошло не так"
  }

  createAuthor(a: Author){
    console.log("create author start")
    let authors:Author[]
    let test= this.getAllAuthor()
    if(test==null){
      authors=[]
      authors.push(a)
    }else{
      authors=test
      authors.push(a)
    }
    
    localStorage.setItem('author', JSON.stringify(authors))
  }

  updateAuthor(id: number){

  }

  deleteAuthor(id: number){

  }

}
