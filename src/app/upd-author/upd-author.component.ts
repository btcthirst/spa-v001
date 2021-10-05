import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../models/author';
import { Book } from '../models/book';
import { Genre } from '../models/genre';
import { AuthorCrudsService } from '../services/author-cruds.service';
import { GenreCrudsService } from '../services/genre-cruds.service';

@Component({
  selector: 'app-upd-author',
  templateUrl: './upd-author.component.html',
  styleUrls: ['./upd-author.component.css']
})
export class UpdAuthorComponent implements OnInit {
  editingAuth!:Author
  genreList!: Genre[]
  toggle=false
  authorForm!: FormGroup
  firstName!:FormControl
  patronymic!:FormControl
  surname!:FormControl
  bithDate!: FormControl
  listBook!: FormGroup
  title!: FormControl
  numberOfPages!:FormControl
  genres!: FormControl
  books!:Book[]
  constructor( private cruds: AuthorCrudsService,
    private genreCrudService: GenreCrudsService,
    private activatedRouter: ActivatedRoute,
    private router: Router  
  ) { }

  
  ngOnInit(): void {
    this.getAuthorToEdit()
    this.getGenreList()
    this.createControls();
    this.createForm();    
    this.addData();
  }
  addData(){
    this.firstName.setValue(this.editingAuth.firstName);
    this.patronymic.setValue(this.editingAuth.patronymic);
    this.surname.setValue(this.editingAuth.surname);    
    this.bithDate.setValue(this.editingAuth.bithDate);
    
    
  }
  getGenreList(){
    this.genreList= this.genreCrudService.getAllGenre()
  }
  getAuthorToEdit(){
    this.activatedRouter.params.subscribe(res=>{
      let testData= this.cruds.getAuthorByID(res.id)
      if(testData=="нет таких"){
        console.log("ошибка нет автора с таким ID")
      } else{
        this.editingAuth = testData as Author
        this.books=this.editingAuth.books        
      }   

    })
  }

  createControls(){
    this.firstName = new FormControl("", Validators.required);
    this.patronymic = new FormControl("");
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
      let id= this.creatorId()
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
      let author =this.authorForm.value as Author
      
      this.editingAuth.books=this.books
      this.editingAuth.surname =author.surname
      this.editingAuth.firstName= author.firstName
      this.editingAuth.patronymic= author.patronymic
      this.editingAuth.bithDate=author.bithDate
      this.cruds.updateAuthor(this.editingAuth)
      this.router.navigate(['/authors']) 
    }
      
  }

  toggler(){
    this.toggle=!this.toggle
  }

}
