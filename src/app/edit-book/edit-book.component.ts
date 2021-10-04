import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../models/book';
import { Genre } from '../models/genre';
import { GenreCrudsService } from '../services/genre-cruds.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() 
  updatedBook!:Book
  genreList!: Genre[]
  @Input() toggleLock = false
  updBook!: FormGroup
  title!: FormControl
  numberOfPages!:FormControl
  genres!: FormControl
  constructor(
    private genreService: GenreCrudsService
  ) { }

  ngOnInit(): void {
    this.getGenres()
    this.createControls()
    this.createForm()
  }

  getGenres(){
    this.genreList = this.genreService.getAllGenre()
  }
  createControls(){
    this.title = new FormControl(`${this.updatedBook.title}`,Validators.required)
    this.numberOfPages = new FormControl(`${this.updatedBook.pages}`, Validators.required)
    this.genres = new FormControl(`${this.updatedBook.genre}`,Validators.required)
  }

  createForm(){
    this.updBook= new FormGroup({
      title: this.title,
      numberOfPages: this.numberOfPages,
      genres: this.genres
    })
  }

  updateBook(){

  }

  goBack(){
    this.toggleLock=false
  }

}
