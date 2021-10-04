import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../models/genre';
import { GenreCrudsService } from '../services/genre-cruds.service';

@Component({
  selector: 'app-upd-genre',
  templateUrl: './upd-genre.component.html',
  styleUrls: ['./upd-genre.component.css']
})
export class UpdGenreComponent implements OnInit {
  genre!: Genre
  updateGenreForm!: FormGroup
  genreName!: FormControl
  description!: FormControl
  constructor(private genreCRUDService:GenreCrudsService,
    private routerActive: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getGenre()
    this.createControl()
    this.createForm()
    
  }

  getGenre(){
    
    this.routerActive.params.subscribe(res=>{
      let test =this.genreCRUDService.getGenre(res.id)
      if(test == "нет таких"){
        
      } else{
        this.genre=<Genre>test
      }
    })
    
  }

  createControl(){
    this.genreName = new FormControl(`${this.genre.name}`, Validators.required);
    this.description = new FormControl(`${this.genre.description}`, Validators.required)
  }
  createForm(){
    this.updateGenreForm= new FormGroup({
      name: this.genreName,
      description: this.description
    })
  }

  onSubmit(){
    if (this.updateGenreForm.valid){
      console.log("submit it",this.updateGenreForm.value)
      let dirtyGenre =this.updateGenreForm.value as Genre
      this.genre.name=dirtyGenre.name
      this.genre.description=dirtyGenre.description
      this.genreCRUDService.updateGenre(this.genre)
      this.router.navigate(['/genres'])
    }
    
  }

}
