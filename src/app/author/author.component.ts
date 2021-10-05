import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../models/author';
import { AuthorCrudsService } from '../services/author-cruds.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors!: Author[]
  constructor(private authorGet: AuthorCrudsService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.getter()
  }

  getter(){
    this.authors =this.authorGet.getAllAuthor()   
    
  }

  updateItem(id:number){
    this.router.navigate([`/authors/update/${id}`])
    console.log("test update")
  }

  deleteItem(id: number){
    console.log("test del")
    this.authorGet.deleteAuthor(id)
    this.getter()
  }
  detailes(a: Author){
    alert(`${a.surname} ${a.firstName} ${a.patronymic}
    родился ${a.bithDate} 
    у нас есть ${a.books.length} книг автора`)

    console.log(a)
  }


}
