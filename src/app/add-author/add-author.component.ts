import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from '../models/author';
import { Book } from '../models/book';
import { AuthorCrudsService } from '../services/author-cruds.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  toggle=false
  authorForm!: FormGroup
  firstName!:FormControl
  patronymic!:FormControl
  surname!:FormControl
  bithDare!: FormControl
  listBook!: FormGroup
  title!: FormControl
  numberOfPages!:FormControl
  genres!: FormControl
  books:Book[]=[new Book('fsfdsfd', 20,'fsfdsfd')]//книга добавлнена только для разработки
  constructor( private cruds: AuthorCrudsService) { }

  
  ngOnInit(): void {
    this.createControls();
    this.createForm();
    
  }
  createControls(){
    this.firstName = new FormControl("", Validators.required);
    this.patronymic = new FormControl();
    this.surname = new FormControl("", Validators.required);
    this.bithDare = new FormControl("", Validators.required);
    this.title = new FormControl("", Validators.required);
    this.numberOfPages = new FormControl("", Validators.required);
    this.genres = new FormControl("", Validators.required);
  }
  createForm(){
    this.listBook=new FormGroup({
      title: this.title,
      numberOfPages: this.numberOfPages,
      genres: this.genres
    });
    this.authorForm = new FormGroup({
      surname: this.surname,
      firstName: this.firstName,
      patronymic:this.patronymic,
      bithDate: this.bithDare,
      /* listBook: this.listBook */
    });
  }
  addBook(){
    
    if(this.listBook.valid){
      let book=new Book(this.title.value,this.numberOfPages.value,this.genres.value) 
      
      this.books.push(book)
      this.listBook.reset()
      this.toggler()
    }
    
  }

  onSubmit(){
    if(this.authorForm.valid && this.books.length>0){
      this.authorForm.value.books =this.books
      this.cruds.createAuthor(this.authorForm.value as Author)
    }
    this.authorForm.reset()    
  }

  toggler(){
    this.toggle=!this.toggle
  }
}

