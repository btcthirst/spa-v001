import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { AuthorCrudsService } from '../services/author-cruds.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors!: Author[]
  constructor(private authorGet: AuthorCrudsService) { }

  ngOnInit(): void {
    this.getter()
  }

  getter(){
    this.authors =this.authorGet.getAllAuthor()   
    
  }

  updateItem(){
    console.log("test update")
  }

  deleteItem(){
    console.log("test delete",)
  }
  detailes(){
    console.log("test detailes")
  }


}
