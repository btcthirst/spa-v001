import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { AuthorCrudsService } from '../services/author-cruds.service';
import { AuthorService } from '../services/author.service';

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
    let auth =this.authorGet.getAllAuthor()
    if(auth==null){
      console.log("NO DATA")
    }else{
      this.authors=auth
    }
  }

}
