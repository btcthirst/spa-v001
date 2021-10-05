import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from '../models/genre';
import { GenreCrudsService } from '../services/genre-cruds.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  addGenreForm!: FormGroup
  name!: FormControl
  description!: FormControl
  constructor(private genreCRUDService:GenreCrudsService,
    private router: Router) { }

  ngOnInit(): void {
    this.createControl()
    this.createForm()
  }

  createControl(){
    this.name = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required)
  }
  createForm(){
    this.addGenreForm= new FormGroup({
      name: this.name,
      description: this.description
    })
  }

  goBack(){
    this.router.navigate(['/genres'])
  }
  
  onSubmit(){
    if (this.addGenreForm.valid){
      console.log("submit it",this.addGenreForm.value)
      this.genreCRUDService.createGenre(this.addGenreForm.value as Genre)
      this.router.navigate(['/genres'])
    }
    
  }

  
}
