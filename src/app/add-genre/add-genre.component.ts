import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Genre } from '../models/genre';
import { GenreCrudsService } from '../services/genre-cruds.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  addGenreForm!: FormGroup
  genreName!: FormControl
  description!: FormControl
  constructor(private genreCRUDService:GenreCrudsService) { }

  ngOnInit(): void {
    this.createControl()
    this.createForm()
  }

  createControl(){
    this.genreName = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required)
  }
  createForm(){
    this.addGenreForm= new FormGroup({
      name: this.genreName,
      description: this.description
    })
  }

  onSubmit(){
    if (this.addGenreForm.valid){
      console.log("submit it",this.addGenreForm.value)
      this.genreCRUDService.createGenre(this.addGenreForm.value as Genre)
      this.addGenreForm.reset()
    }
    
  }
}
