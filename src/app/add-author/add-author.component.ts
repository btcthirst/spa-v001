import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
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
  constructor() { }

  
  ngOnInit(): void {
    this.createControls();
    this.createForm();
    console.log(this.authorForm)
  }
  createControls(){
    this.firstName = new FormControl("", Validators.required);
    this.patronymic = new FormControl("", Validators.required);
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
      listBook: this.listBook
    });
  }
  addBook(){
    
    if(this.listBook.valid){
      let book=new Book(this.title.value,this.numberOfPages.value,this.genres.value) 
      
      this.books.push(book)
      this.listBook.reset()
    }
    
  }
}

class Book{
  constructor(private _title: string, private _pages: number, private _genre: string){}

  get title(){
    return this._title
  }
  set title(val: string){
    this._title=val
  }

  get pages(){
    return this._pages
  }
  set pages(val: number){
    this._pages=val
  }

  get genre(){
    return this._genre
  }
  set genre(val: string){
    this._genre=val
  }
}