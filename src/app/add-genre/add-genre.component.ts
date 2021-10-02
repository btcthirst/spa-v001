import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  addGenreForm!: FormGroup
  genreName!: FormControl
  description!: FormControl
  constructor() { }

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
      genreName: this.genreName,
      description: this.description
    })
  }

  onSubmit(){
    if (this.addGenreForm.valid){
      console.log("submit it",this.addGenreForm.value)
      this.addGenreForm.reset()
    }
    
  }
}
