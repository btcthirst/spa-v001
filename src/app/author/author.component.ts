import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors!: Author[]
  constructor(private authorGet: AuthorService) { }

  ngOnInit(): void {
    this.authors=this.authorGet.getAuthorFrom()
  }

}
