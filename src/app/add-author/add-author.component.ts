import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from '../models/author';
import { Book } from '../models/book';
import { Genre } from '../models/genre';
import { AuthorCrudsService } from '../services/author-cruds.service';
import { GenreCrudsService } from '../services/genre-cruds.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  genreList!: Genre[]
  toggle=false
  togg=0
  authorForm!: FormGroup
  firstName!:FormControl
  patronymic!:FormControl
  surname!:FormControl
  bithDate!: FormControl
  listBook!: FormGroup
  title!: FormControl
  numberOfPages!:FormControl
  genres!: FormControl
  books:Book[]=[]
  constructor( private cruds: AuthorCrudsService,
    private genreCrudService: GenreCrudsService,
    private router: Router) { }

  
  ngOnInit(): void {
    this.createControls();
    this.createForm();
    this.genreList= this.genreCrudService.getAllGenre()
    
  }
  createControls(){
    this.firstName = new FormControl("", Validators.required);
    this.patronymic = new FormControl();
    this.surname = new FormControl("", Validators.required);
    this.bithDate = new FormControl("", Validators.required);
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
      bithDate: this.bithDate,
      /* listBook: this.listBook */
    });
  }
  addBook(){
    
    if(this.listBook.valid){
      let id = this.creatorId()
      let book=new Book(id,this.title.value,this.numberOfPages.value,this.genres.value) 
      
      this.books.push(book)
      this.listBook.reset()
      this.toggler()
    }
    
  }

  deleteBook(id: number){
    this.books= this.books.filter(book=>{
      if(book.id==id){
        return null
      }
      return book
    })
  }

  creatorId(){
    let books= this.books 
    let count
    for(let i=1;;i++){
      count=0
      for(let b of books){        
        if(b.id==i){          
          count++
        }
      }
      if(count==0){
        return i
      }
    } 
    
  }

  updateBook(b: Book){
    this.toggler()
    this.title.setValue(b.title)
    this.numberOfPages.setValue(b.pages)
    this.genres.setValue(b.genre)
    this.books=this.books.filter(el=>{
      if(el.id==b.id){
        return null
      }
      return el
    })
  }

  onSubmit(){
    if(this.authorForm.valid && this.books.length>0){
      this.authorForm.value.books =this.books
      this.cruds.createAuthor(this.authorForm.value as Author)
      this.router.navigate(['/authors']) 
    }
     
  }

  toggler(){
    this.toggle=!this.toggle
  }
}

